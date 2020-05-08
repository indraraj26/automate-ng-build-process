new 
// import * as chalk from 'chalk';
const chalk = require('chalk');
const fs = require('fs');
const { exec } = require('child_process');

let config: any = {};
const log = console.log;
// log(process.argv[2]);
const arg = process.argv[2];

let cmd = 'src/environments/environment';

if (arg == 'serve') {
  cmd = 'src/environments/environment';
} else if (arg == 'Staging') {
  cmd = 'src/environments/environment.staging';
} else if (arg == 'Production') {
  cmd = 'src/environments/environment.prod';
} else if (arg == 'Development') {
  cmd = 'src/environments/environment.dev';
}

exec(`npm run tsc ${cmd}`, (error, stdout, stderr) => {
  if (error) {
    console.log(chalk.red(`exec error: ${error}`));
    return;
  }
  let env;

  if (arg == 'serve') {
    fs.copyFileSync(`${cmd}.js`, 'scripts/environment.js');
    fs.unlinkSync(`${cmd}.js`);
    env = require('./scripts/environment.js');
  } else if (arg == 'Staging') {
    fs.copyFileSync(`${cmd}.js`, 'scripts/environment.staging.js');
    fs.unlinkSync(`${cmd}.js`);
    env = require('./scripts/environment.staging.js');
  } else if (arg == 'Production') {
    fs.copyFileSync(`${cmd}.js`, 'scripts/environment.prod.js');
    fs.unlinkSync(`${cmd}.js`);
  } else if (arg == 'Development') {
    fs.copyFileSync(`${cmd}.js`, 'scripts/environment.dev.js');
    fs.unlinkSync(`${cmd}.js`);
    env = require('./scripts/environment.dev.js');
  }
  console.log(chalk.bgMagenta('Copy env to scrips'));
  console.log(env.environment);
});

/* if (arg == 'serve') {
  config = { ...environment };
} */
/* else if (arg == 'Staging') {
  config = { ...envStaging.environment };
} else if (arg == 'Production') {
  config = { ...envProduction.environment };
} else if (arg == 'Development') {
  config = { ...envDev.environment };
} */
/* 
log(chalk.red('================================================'));
log(chalk.green('Configuration : ') + chalk.blue(arg));
log(chalk.green('API URL : ') + chalk.blue(config.apiUrl));
log(chalk.green('Storage URL : ') + chalk.blue(config.storageApiUrl));
log(
  chalk.green('Powered By ') +
    chalk.blue.underline.bold('Infini System Pvt. Ltd.')
);
log(chalk.red('================================================'));
 */
