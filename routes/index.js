import express from "express";
 
// import { 
//     getAllProducts,
//     createProduct,
//     getProductById,
//     updateProduct,
//     deleteProduct,
// } from "../controllers/Products.js";
 
import {
    getAllQuestions,
    getQuestionById,
    getQuestionThatContainDescription,
    createQuestion,
    getLastQuestion,
} from "../controllers/Question.js";

import {
    getQuestionAnswerById,
    getAllQuestionAnswers,
    createQuestionAnswer,
    getLastQuestionAnswer,
} from "../controllers/QuestionAnswer.js";

import {
    getAllAnswers,
    getAnswerByIsAnswering,
    createAnswer,
    getLastAnswer,
} from "../controllers/Answer.js";

import {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    getLastUser,
    getUserByName,
    hashPassword,
    checkPassword,
    getUserByEmailNode,
    updateDoneExercise
} from "../controllers/User.js";

import {
    getAllExercises,
    getExerciseThatContainDescription,
    getExerciseByUserID,
    createExercise,
    getLastExercise,
    getExerciseByID
} from "../controllers/Exercise.js";


const router = express.Router();

// router.get('/', getAllProducts);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);
 
router.get('/questions', getAllQuestions);
router.get('/questions/:id', getQuestionById);
router.post('/questions', createQuestion);
router.get('/lastQuestion', getLastQuestion);
router.get('/questionAnswers/:id', getQuestionAnswerById);
router.get('/questionAnswers', getAllQuestionAnswers);
router.post('/questionAnswers', createQuestionAnswer);
router.get('/lastQuestionAnswer', getLastQuestionAnswer);
router.get('/answers', getAllAnswers);
router.get('/answers/isAnswering/:id/:type', getAnswerByIsAnswering);
router.post('/answers', createAnswer);
router.get('/lastAnswer', getLastAnswer);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/email/:email', getUserByEmail);
router.get('/usersByName/:name', getUserByName);
router.patch('/users/updateExerciseDone/:id', updateDoneExercise);
router.get('/lastUser', getLastUser);
router.post('/users', createUser);
router.get('/hashPassword/:password', hashPassword)
router.get('/checkPassword/:password/:hash', checkPassword)
router.get('/questions/search/:description', getQuestionThatContainDescription);
router.get('/exercises', getAllExercises);
router.get('/exercises/:id', getExerciseByID);
router.get('/exercises/search/:description', getExerciseThatContainDescription);
router.get('/exercises/user/:id', getExerciseByUserID);
router.post('/exercises', createExercise);
router.get('/lastExercise', getLastExercise);

// // Login endpoint
// router.post("/login", async (req, res) => {
//     const { id } = req.body;
//     console.log("id",id)
//     try {
//         req.session.userId = id;
//         req.session.save((err) => {
//           if (err) {
//             console.error("Session save error:", err);
//             res.status(500).json({ message: "Internal server error" });
//           } else {
//             console.log("Login successful");
//             res.json({ message: "Login successful" });
//           }
//         });
//     } catch (error) {
//       console.error("Login error:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });
  
//   // Logout endpoint
//   router.post("/logout", (req, res) => {
//     req.session.destroy();
//     res.json({ message: "Logout successful" });
//   });

  
//   router.get("/currentUserId", (req, res) => {
//     console.log("Session ID:", req.session.id);
//     console.log("Session Data:", req.session);
  
//     const userId = req.session.userId;
  
//     if (userId) {
//       res.json({ userId });
//     } else {
//       res.status(401).json({ message: "Not logged in" });
//     }
//   });
  

  // router.get("/currentUserId", (req, res) => {
  //   res.json({ message: "Current user ID route reached" });
  // });
  

export default router;