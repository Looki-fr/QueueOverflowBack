import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const U = db.define('user',{
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
        type: DataTypes.INTEGER,
    },
    password:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false,
});
 
U.removeAttribute('id');
U.removeAttribute('createdAt');
U.removeAttribute('updatedAt');
U.tableName = 'user';

export default U;