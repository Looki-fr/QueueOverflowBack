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