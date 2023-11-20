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
} from "../controllers/Question.js";

import {
    getQuestionAnswerById,
    getAllQuestionAnswers,
} from "../controllers/QuestionAnswer.js";

import {
    getAllAnswers,
} from "../controllers/Answer.js";

import {
    getAllUsers,
    getUserById,
} from "../controllers/User.js";

const router = express.Router();

// router.get('/', getAllProducts);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);
 
router.get('/questions', getAllQuestions);
router.get('/questions/:id', getQuestionById);
router.get('/questionAnswers/:id', getQuestionAnswerById);
router.get('/questionAnswers', getAllQuestionAnswers);
router.get('/answers', getAllAnswers);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;