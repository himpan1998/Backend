import express from 'express';
import tasks from '../controllers/taskControllers';
var router=express.Router();

router.post('/create',tasks.createtasks)
router.get('/gettask',tasks.gettasks)
router.patch('/update/:id',tasks.updatetask)
router.delete('/delete',tasks.deletetask)


export default router;