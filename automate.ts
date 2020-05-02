import * as chalk from 'chalk';
import * as env from './env';
import * as envStaging from './env.staging';

let config: any = {};

const log = console.log;
// log(process.argv[2]);
if (process.argv[2] == 'Production') {
	config = { ...env.environment };
} else if (process.argv[2] == 'Staging') {
	config = { ...envStaging.environment };
}

log(chalk.red('================================================'));
log(chalk.green('Configuration : ') + chalk.blue(process.argv[2]));
log(chalk.green('API URL : ') + chalk.blue(config.apiUrl));
log(chalk.green('Storage URL : ') + chalk.blue(config.storageApiUrl));
log(
	chalk.green('Powered By ') +
		chalk.blue.underline.bold('Infini System Pvt. Ltd.'),
);
log(chalk.red('================================================'));
