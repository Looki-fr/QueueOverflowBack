import Exercise from "../models/exerciseMdel.js";
import { Op } from "sequelize";
export const getAllExercises = async (req, res) => {
    try {
        const ex = await Exercise.findAll();
        res.json(ex);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getExerciseThatContainDescription = async (req, res) => {
    try {
        const ex = await Exercise.findAll({
            where: {
                [Op.or]: [
                    { Description: {[Op.like]: `%${req.params.description}%`} },
                    { Tag: { [Op.like]: `%${req.params.description}%` } }
                ]
            }
        });
        res.json(ex);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getExerciseByUserID = async (req, res) => {
    try {
        const ex = await Exercise.findAll({
            where: {
                UserID: req.params.id
            }
        });
        res.json(ex);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const createExercise = async (req, res) => {
    try {
        const ex = await Exercise.create(req.body);
        res.json(ex);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getLastExercise = async (req, res) => {
    try {
        const ex = await Exercise.findOne({
            order: [
                ['ExerciseID', 'DESC']
            ],
        });
        res.json(ex);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getExerciseByID = async (req, res) => {
    try {
        const ex = await Exercise.findAll({
            where: {
                ExerciseID: req.params.id
            }
        });
        res.json(ex[0]);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}