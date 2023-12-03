import QuestionAnswer from "../models/questionAnswerModel.js";

export const getAllQuestionAnswers= async (req, res) => {
    try {
        const questionAnswers = await QuestionAnswer.findAll();
        res.json(questionAnswers);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getQuestionAnswerById = async (req, res) => {
    try {
        const questionAnswers = await QuestionAnswer.findAll({
            where: {
                QuestionAnswerID: req.params.id
            }
        });
        res.json(questionAnswers[0]);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}
 
export const createQuestionAnswer = async (req, res) => {
    try {
        const questionAnswer = await QuestionAnswer.create(req.body);
        res.json(questionAnswer);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getLastQuestionAnswer = async (req, res) => {
    try {
        const questionAnswer = await QuestionAnswer.findAll({
            limit: 1,
            order: [ [ 'QuestionAnswerID', 'DESC' ]]
        });
        res.json(questionAnswer[0]);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}