const command = 'current';
const describe = 'Получить текущую дату и время';

const builder = (yargs) =>
  yargs
    .option('year', {
      alias: 'y',
      type: 'boolean',
      describe: 'Показать текущий год',
    })
    .option('month', {
      alias: 'm',
      type: 'boolean',
      describe: 'Показать текущий месяц',
    })
    .option('date', {
      alias: 'd',
      type: 'boolean',
      describe: 'Показать дату месяца',
    });

const handler = (argv) => {
  const now = new Date();

  if (argv.year) {
    console.log(now.getFullYear());
  } else if (argv.month) {
    console.log(now.getMonth() + 1); // в JS месяцы считаются с 0, поэтому прибавляем 1
  } else if (argv.date) {
    console.log(now.getDate());
  } else {
    console.log(now.toISOString());
  }
};

module.exports = {
  command,
  describe,
  builder,
  handler,
};
