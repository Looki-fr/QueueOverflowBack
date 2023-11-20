import Question from "../models/questionModel.js";

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
 