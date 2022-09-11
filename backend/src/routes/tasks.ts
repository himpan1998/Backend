import express from 'express';
import tasks from '../controllers/taskControllers';
var router=express.Router();

router.post('/create',tasks.createtasks)


export default router;