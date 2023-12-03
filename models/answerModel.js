import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Answer = db.define('answer',{
    AnswerID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    QuestionAnswerID:{
        type: DataTypes.INTEGER,
    },
    Answer:{
        type: DataTypes.STRING,
    },
    isAnswering:{
        type: DataTypes.INTEGER,
    }
},{
    freezeTableName: true,
    timestamps: false,
});
 
Answer.removeAttribute('id');
Answer.removeAttribute('createdAt');
Answer.removeAttribute('updatedAt');

export default Answer;