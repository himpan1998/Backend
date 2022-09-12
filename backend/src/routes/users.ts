import express from 'express';
import users from '../controllers/userControllers';
var router=express.Router();

router.post('/create',users.createUserList)
router.get('/get',users.getUserList)
router.patch('/update/:id',users.updateUserList)
router.patch('/updatelist/:id',users.updateSpecificUsersList)


export default router;