import express from 'express';
import users from '../controllers/userControllers';
var router=express.Router();


router.post('/create',users.createUserList)
router.get('/get',users.getUserList)
router.patch('/update/:id',users.updateUserList)
router.patch('/updatelist/:id',users.updateSpecificUsersList)
router.delete('/delete/:id',users.deleteuser)
router.post('/register',users.UserRegister)
router.post('/login',users.UserLogin)
router.post('/create-update/:id',users.CreateUser)



export default router;