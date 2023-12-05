import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Exercise = db.define('exercise',{
    ExerciseID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Date:{
        type: DataTypes.STRING,
    },
    Description:{
        type: DataTypes.STRING,
    },
    CodeAnswer:{
        type: DataTypes.STRING,
    },
    UserID :{
        type: DataTypes.INTEGER,
    }, 
    Tag : {
        type: DataTypes.STRING,
    }

},{
    freezeTableName: true,
    timestamps: false,
});

Exercise.removeAttribute('id');
Exercise.removeAttribute('createdAt');
Exercise.removeAttribute('updatedAt');

export default Exercise;