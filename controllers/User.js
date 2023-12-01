import U from "../models/userModel.js";
export const getAllUsers = async (req, res) => {
    try {
        const users = await U.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getUserById = async (req, res) => {
    try {
        const users = await U.findAll({
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

export const getUserByEmail = async (req, res) => {
    try {
        const users = await U.findAll({
            where: {
                Email: req.params.email
            }
        });
        res.json(users[0]);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const createUser = async (req, res) => {
    try {
        await U.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}

export const getLastUser = async (req, res) => {
    try {
        const users = await U.findOne({
            order: [
                ['UserID', 'DESC']
            ],
        });
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
        console.log("error : ", error)
    }  
}