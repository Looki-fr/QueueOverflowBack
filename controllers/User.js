import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getUserById = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                UserID: req.params.id
            }
        });
        res.json(users[0]);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}