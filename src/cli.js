const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const cmdCurrent = require('./commands/current');
const cmdAdd = require('./commands/add');
const cmdSub = require('./commands/sub');

yargs(hideBin(process.argv))
  .parserConfiguration({
    'short-option-groups': false // запрет сжатия коротких опций (например, защита от '-mm')
  })
  .command(cmdCurrent) // .command({command: '', describe: '', builder: fn, handler: fn })
  .command(cmdAdd)
  .command(cmdSub)
  .demandCommand(1, 'Нужно указать команду')
  .strict() // запрет неизвестных команд/флагов
  .fail((msg, err, yargs) => {
    console.error('Ошибка:', msg);
    console.log('\n' + yargs.help());
    process.exit(1);
  })
  .help()
  .argv;
