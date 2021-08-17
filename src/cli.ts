const { build } = require('gluegun')

/**
 * Create the cli and kick it off
 */
async function run(argv) {
  // create a CLI runtime
  const cli = build()
    .brand('all-the-types')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'all-the-types-*', hidden: true })
    .help()
    .version()
    .create()
  const toolbox = await cli.run(argv)

  return toolbox
}

module.exports = { run }
