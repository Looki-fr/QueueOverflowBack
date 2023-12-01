import Question from "../models/questionModel.js";
import { Op } from "sequelize";

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        res.json(questions);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}
 
export const getQuestionById = async (req, res) => {
    try {
        const questions = await Question.findAll({
            where: {
                QuestionID: req.params.id
            }
        });
        res.json(questions[0]);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

 
export const getQuestionThatContainDescription = async (req, res) => {
    try {
        const questions = await Question.findAll({
            where: {
                [Op.or]: [
                    { Description: {[Op.like]: `%${req.params.description}%`} },
                    { Title: { [Op.like]: `%${req.params.description}%` } },
                    { Tag: { [Op.like]: `%${req.params.description}%` } },
                ]
            },
        });
        res.json(questions);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}