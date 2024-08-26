import { Sequelize } from 'sequelize';
import urlSchema from "./models/url.js";
import "dotenv/config";


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

let UrlsModel = null;

async function db_connection() {
    try{ 
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UrlsModel = await urlSchema(sequelize);
        await sequelize.sync();
        console.log('database synced...');
    }
    catch(err) {
        console.error('Unable to connect to the database:', err);
    } 
}

export {
    db_connection,
    UrlsModel
}