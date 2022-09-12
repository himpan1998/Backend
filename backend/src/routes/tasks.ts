import express from 'express';
import tasks from '../controllers/taskControllers';
var router=express.Router();

router.post('/create',tasks.createtasks)
router.get('/gettask',tasks.gettasks)
router.get('/getone',tasks.getonetask)
router.get('/getbyPk',tasks.gettasksbypk)
router.patch('/update/:id',tasks.updatetask)
router.delete('/delete',tasks.deletetask)
router.delete('/deleteone/:id',tasks.delete_one)


export default router;