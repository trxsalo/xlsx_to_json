
import {resetDatabase} from './reset';
import {seedDatabase}  from './seed';
import {exec} from 'child_process'
import * as util from "node:util";

const execPromise = util.promisify(exec);


const runMigrations = async () => {
    try {
        const { stdout, stderr } = await execPromise('npx sequelize-cli db:migrate');
        console.log(stdout);
        if (stderr) {
            console.error(stderr);
        }
    } catch (error) {
        console.error('Error running migrations:', error);
    }
};


const main = async () => {
    await runMigrations();
    await resetDatabase();
    await seedDatabase();
};

main().catch(e => {
    console.error(e);
    process.exit(1);
});
