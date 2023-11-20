import { Sequelize } from "sequelize";
 
const db = new Sequelize('queueoverflow', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;