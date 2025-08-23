#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const cmdCurrent = require('./commands/current');
const cmdAdd = require('./commands/add');
const cmdSub = require('./commands/sub');

yargs(hideBin(process.argv))
  .command(cmdCurrent) // .command({command: '', describe: '', builder: fn, handler: fn })
  .command(cmdAdd)
  .command(cmdSub)
  .demandCommand(1, 'Нужно указать команду')
  .help()
  .argv;
