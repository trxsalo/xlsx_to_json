import {sequelize} from "../squelize-config";
import * as models from './models';

export const sync_models = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database sync successfully');
    } catch (error) {
        console.error('Error sync database:', error);
    } finally {
        await sequelize.close();
    }
};
