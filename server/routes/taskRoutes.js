import express from 'express';
import { createTasks, getAllTasks, updateTask, deleteTask } from '../controllers/tasks.js';

const router = express.Router();

// router.get('/hello', (req, res) => {
//     res.json('hello world');
// });

router.post('/',createTasks);
router.get('/all',getAllTasks);
router.put('/:taskId',updateTask);
router.delete('/:taskId',deleteTask);

export default router;