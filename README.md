Fresh Platform Plugin for [vue-cli@3.0](https://github.com/vuejs/vue-cli)

Exclusive tool for the Fresh Platform UI and requires [Fresh BUS UI](https://github.com/FreshinUp/fresh-bus-forms)

# Install

If you haven't yet installed vue-cli 3, first follow the install instructions here: https://github.com/vuejs/vue-cli

This package is not registered with any public or private package managers. As such you must install via Github

```bash
$ vue add git+ssh://git@github.com/freshinup/vue-cli-plugin-freshinup.git
```

# Usage

## Injected Commands
Coming soon...

Currently just a **generator** project for bootstraping new Laravel Projects


# Contributing

```bash
$ cd ~/Development # or similar
$ git clone https://github.com/freshinup/vue-cli-plugin-freshinup.git
$ cd vue-cli-plugin-freshinup
$ yarn link
$ cd ..
$ laravel new fresh-project
$ cd fresh-project
$ yarn link vue-cli-plugin-freshinup
```

It is a good idea to use this in a new project
