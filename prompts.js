module.exports = pkg => {
  const prompts = [
    {
      type: 'input',
      name: 'appName',
      message: 'The name of the client application',
      validate: input => !!input,
      default: null
    },
    {
      name: 'addScripts',
      type: 'confirm',
      message: 'Generate scripts section in package.json. This may replace script lines of the same name',
      default: false
    },
    {
      name: 'addBaseFiles',
      type: 'confirm',
      message: 'Generate base files. This may replace existing files',
      default: false
    }
  ]

  return prompts
}
