import { GluegunCommand } from 'gluegun'
import * as _ from 'lodash'

const command: GluegunCommand = {
  name: 'all-the-types',
  run: async toolbox => {
    const { print } = toolbox
    const a = _.chunk([true, false], 1)

    console.dir(a)

    print.info('Welcome to your CLI')
  }
}

module.exports = command
