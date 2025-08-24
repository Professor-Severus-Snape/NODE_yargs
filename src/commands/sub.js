const command = 'sub';
const describe = 'Вычесть время из текущей даты';

const builder = (yargs) =>
  yargs
    .option('year', {
      alias: 'y',
      type: 'number',
      describe: 'Вычесть годы',
    })
    .option('month', {
      alias: 'm',
      type: 'number',
      describe: 'Вычесть месяцы',
    })
    .option('date', {
      alias: 'd',
      type: 'number',
      describe: 'Вычесть дни',
    })
    .check((argv) => {
      // перехват ошибки в cli.js -> .fail()
      if (
        argv.year === undefined &&
        argv.month === undefined &&
        argv.date === undefined
      ) {
        throw new Error(
          'Укажите, что именно нужно вычесть и/или сколько. Используйте флаг --year (-y), --month (-m) или --date (-d) с числовым значением.',
        );
      }
      return true; // если проверка прошла успешно
    });

const handler = (argv) => {
  const now = new Date();

  if (argv.year) {
    now.setFullYear(now.getFullYear() - argv.year);
  }

  if (argv.month) {
    now.setMonth(now.getMonth() - argv.month);
  }

  if (argv.date) {
    now.setDate(now.getDate() - argv.date);
  }

  console.log(now.toISOString());
};

module.exports = {
  command,
  describe,
  builder,
  handler,
};
