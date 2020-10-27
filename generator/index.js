const fs = require('fs')
const path = require('path')
const codeStyleDependencies = {
  'babel-eslint': '^10.0.1',
  eslint: '^5.16.0',
  'eslint-config-standard': '^12.0.0',
  'eslint-plugin-import': '^2.16.0',
  'eslint-plugin-jest': '^22.5.1',
  'eslint-plugin-node': '^8.0.1',
  'eslint-plugin-promise': '^4.1.1',
  'eslint-plugin-standard': '^4.0.0',
  'eslint-plugin-vue': '^5.2.2',
  '@vue/eslint-config-standard': '^4.0.0'
}

const vueDependencies = {
  '@vue/babel-preset-app': '^3.10.0',
  '@vue/cli-plugin-babel': '^3.10.0',
  'babel-preset-vue': '^2.0.2',
  vue: '^2.6.10',
  'vue-analytics': '^5.16.4',
  'vue-axios': '^2.1.4',
  'vue-template-compiler': '^2.6.10',
  vuex: '^3.1.0',
  'vuex-map-fields': '^1.3.2',
  'vuex-rest-api': '^2.10.0',
  'vue-router': '^3.0.3'
}

const vuetifyDependencies = {
  '@mdi/font': '^4.4.95',
  'vee-validate': '^2.2.2',
  vuetify: '^1.5.16',
  'vuetify-loader': '^1.3.0',
  'vue-cli-plugin-vuetify': '^0.6.1'
}

const testDependencies = {
  'babel-jest': '^24.8.0',
  'axios-mock-adapter': '^1.17.0',
  'jest-cli': '^24.8.0',
  'jest-date-mock': '^1.0.7',
  'jest-serializer-vue': '^2.0.2',
  'jest-transform-stub': '^2.0.0',
  '@vue/test-utils': '^1.0.0-beta.29',
  '@vue/cli-plugin-unit-jest': '^3.10.0'
}

const storybookDependencies = {
  '@storybook/addon-actions': '^5.0.6',
  '@storybook/addon-backgrounds': '^5.0.6',
  '@storybook/addon-contexts': '^5.1.11',
  '@storybook/addon-knobs': '^5.0.6',
  '@storybook/addon-links': '^5.0.6',
  '@storybook/addon-notes': '^5.0.6',
  '@storybook/addon-options': '^5.1.11',
  '@storybook/addon-storysource': '^5.1.11',
  '@storybook/addon-viewport': '^5.0.6',
  '@storybook/addons': '^5.0.6',
  '@storybook/source-loader': '^5.2.1',
  '@storybook/vue': '^5.0.6',
  'vue-cli-plugin-storybook': '^0.6.1',
  'storybook-vue-router': '^1.0.3'
}

module.exports = (api, options) => {
  const scripts = options.addScripts ? {
    scripts: {
      lint: 'eslint --ext .js,.vue resources/js tests/Javascript .storybook webpack.mix.js',
      test: 'yarn test:unit',
      'test:unit': 'cross-env vue-cli-service test:unit',
      storybook: 'yarn storybook:serve',
      'storybook:build': 'cross-env STORYBOOK=true vue-cli-service storybook:build -c .storybook/config -o ./public/styleguide',
      'storybook:serve': 'cross-env STORYBOOK=true vue-cli-service storybook:serve -p 6006 -c .storybook/config -s ./public'
    }
  } : {}

  api.extendPackage({
    devDependencies: {
      ...codeStyleDependencies,
      ...vuetifyDependencies,
      ...vueDependencies,
      ...storybookDependencies,
      ...testDependencies,
      '@freshinup/core-ui': 'git+ssh://git@github.com/freshinup/core-ui.git',
      '@babel/core': '^7.4.5',
      '@babel/plugin-transform-regenerator': '^7.4.5',
      '@babel/plugin-transform-runtime': '^7.4.5',
      '@babel/preset-env': '^7.4.5',
      '@vue/cli-service': '^3.10.0',
      'babel-core': '^7.0.0-bridge.0',
      'babel-loader': '^8.0.5',
      'babel-plugin-require-context-hook': '^1.0.0',
      'babel-plugin-transform-imports': '^1.5.1',
      chance: '^1.0.18',
      'core-js': '^2.6.9',
      'cross-env': '^5.2.0',
      'dotenv-webpack': '^1.7.0',
      lodash: '^4.17.5',
      'node-sass': '^4.11.0',
      'resolve-url-loader': '^2.3.1',
      sass: '^1.18.0',
      'sass-loader': '^7.1.0',
      stylus: '^0.54.5',
      'stylus-loader': '^3.0.2',
      'webpack-cli': '^3.3.6',
      'webpack-laravel-mix-manifest': '^1.0.6'
    },
    ...scripts
  })

  if (options.addBaseFiles) {
    api.render('./template', { ...options })
  }

  api.onCreateComplete(() => {
    const laravelComponent = path.resolve(process.cwd(), './resources/js/components/ExampleComponent.vue')
    if (fs.existsSync(laravelComponent)) {
      fs.unlinkSync(laravelComponent)
    }
  })
}
