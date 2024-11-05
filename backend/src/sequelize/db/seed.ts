import {tecAppUser} from "@Sequelize/db/models";


export const seedDatabase = async () => {
    try {
        /**/
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};
