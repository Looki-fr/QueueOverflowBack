import Answer from "../models/answerModel.js";

export const getAllAnswers = async (req, res) => {
    try {
        const answers = await Answer.findAll();
        res.json(answers);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getAnswerByIsAnswering = async (req, res) => {
    try {
        const answers = await Answer.findAll({
            where: {
                isAnswering: req.params.id
            }
        });
        res.json(answers);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}