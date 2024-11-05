import {sequelize} from "../squelize-config";


export const resetDatabase = async () => {
    try {
        await sequelize.drop();
        console.log('Database reset successfully');
    } catch (error) {
        console.error('Error resetting database:', error);
    } finally {
        await sequelize.close();
    }
};
