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
} from "../controllers/User.js";

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
router.get('/answers/isAnswering/:id', getAnswerByIsAnswering);
router.post('/answers', createAnswer);
router.get('/lastAnswer', getLastAnswer);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/email/:email', getUserByEmail);
router.get('/usersByName/:name', getUserByName);
router.get('/lastUser', getLastUser);
router.post('/users', createUser);
router.get('/questions/search/:description', getQuestionThatContainDescription);


export default router;