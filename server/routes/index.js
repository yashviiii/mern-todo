import express from "express";
import taskRoutes from './taskRoutes.js'
import userRoutes from './userRoutes.js'
import authRoutes from './authRoutes.js'
import checkAuth from "../utils/checkAuth.js";


const router = express.Router();

router.use('/tasks',taskRoutes);
router.use('/auth',authRoutes);
router.use('/user', checkAuth,userRoutes);

export default router;