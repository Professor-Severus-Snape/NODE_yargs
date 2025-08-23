const yargs = require('yargs/yargs');

const command = 'add';
const describe = 'Добавить время к текущей дате';

const builder = (yargs) =>
  yargs
    .option('year', {
      alias: 'y',
      type: 'number',
      describe: 'Добавить годы',
    })
    .option('month', {
      alias: 'm',
      type: 'number',
      describe: 'Добавить месяцы',
    })
    .option('date', {
      alias: 'd',
      type: 'number',
      describe: 'Добавить дни',
    })
    .check((argv) => {
      if (
        argv.year === undefined &&
        argv.month === undefined &&
        argv.date === undefined
      ) {
        // перехват ошибки в cli.js -> .fail()
        throw new Error(
          'Укажите, что именно нужно добавить и/или сколько. Используйте флаг --year (-y), --month (-m) или --date (-d) с числовым значением.'
        );
      }
      return true; // если проверка прошла успешно
    });

const handler = (argv) => {
  let now = new Date();

  if (argv.year) {
    now.setFullYear(now.getFullYear() + argv.year);
  }

  if (argv.month) {
    now.setMonth(now.getMonth() + argv.month);
  }

  if (argv.date) {
    now.setDate(now.getDate() + argv.date);
  }

  console.log(now.toISOString());
};

module.exports = {
  command,
  describe,
  builder,
  handler,
};
