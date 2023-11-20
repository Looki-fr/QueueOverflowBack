import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const User = db.define('user',{
    UserID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Username:{
        type: DataTypes.STRING,
    },
    Email:{
        type: DataTypes.STRING,
    },
    CreatedAt:{
        type: DataTypes.STRING,
    },
    Age:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
User.removeAttribute('id');
User.removeAttribute('createdAt');
User.removeAttribute('updatedAt');

export default User;