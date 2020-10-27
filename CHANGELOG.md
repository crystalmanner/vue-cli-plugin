# 0.8.0
- **ADD** Jest Configuration Core has module mapping for `@freshinup` packages
- **ADD** Jest Configuration Core has module path set to `node_modules`

# 0.7.1
Make the default jest config force to using the top-level `@freshinup/core-ui` package (`./node_modules`) and not the one from `vendors/freshinup/fresh-bus-forms/node_modules`

# 0.7.0
Incorporate `@freshinup/core-ui` as a standard

# 0.6.1
_Still in pre-release. Be ware of breaking changes between versions_

- **FIX** `mockDate.js` code style issue that was not caught with linting


# 0.6.0
_Still in pre-release. Be ware of breaking changes between versions_

- **ADD** `.nvmrc` with version `10` for Node

# 0.2.0
_Still in pre-release. Be ware of breaking changes between versions_

### Added prompts for 

- `addScripts` allowing control over whether or not to add Scripts (default `false`)
- `addBaseFiles` allowing control over whether or not to add the Fresh Platform Base UI files, testing, and storybook configurations (default `false`)

### Fixed client building
Building was being halted on some projects due to ES6 imports, hence the change back to `require` type of "import"

# 0.1.0
Initial pre-release introducing Generator for Scripts, Skeleton project, Test and Storybook configuration, and dependency setup
