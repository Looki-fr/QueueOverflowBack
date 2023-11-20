import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Question = db.define('question',{
    QuestionID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    QuestionAnswerID:{
        type: DataTypes.INTEGER,
    },
    Tag:{
        type: DataTypes.STRING,
    },
    Title:{
        type: DataTypes.STRING,
    },
    Description:{
        type: DataTypes.STRING,
    },
    ExerciseID:{
        type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true
});
 
Question.removeAttribute('id');
Question.removeAttribute('createdAt');
Question.removeAttribute('updatedAt');

export default Question;