import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const QuestionAnswer = db.define('questionanswer',{
    QuestionAnswerID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    Date:{
        type: DataTypes.STRING,
    },
    UserID:{
        type: DataTypes.INTEGER,
    },
},{
    freezeTableName: true
});
 
QuestionAnswer.removeAttribute('id');
QuestionAnswer.removeAttribute('createdAt');
QuestionAnswer.removeAttribute('updatedAt');

export default QuestionAnswer;