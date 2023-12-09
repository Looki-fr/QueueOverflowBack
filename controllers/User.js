import U from "../models/userModel.js";
import bcrypt from "bcrypt";
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

export const getUserByName = async (req, res) => {
    try {
        const users = await U.findAll({
            where: {
                Username: req.params.name
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

export const hashPassword = async (req, res) => {
    bcrypt.hash(req.params.password, 10)
        .then(hash => {
            try {
                res.json({hash:hash});
            } catch (error) {
                res.json({ message: error.message });
                console.log("error : ", error)
            }
        })
        .catch(err => {
            res.json({ message: err.message });
        })
}

export const checkPassword = async (req, res) => {
    bcrypt.compare(req.params.password, req.params.hash)
        .then(result => {
            try {
                res.json({result:result});
            } catch (error) {
                res.json({ message: error.message });
                console.log("error : ", error)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

export const getUserByEmailNode = async (email) => {
    try {
        const user = await U.findOne({ where: { Email: email } });
        return user;
    } catch (error) {
        console.error("Get user by email error:", error);
        throw error;
    }
    };