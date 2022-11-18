import express from 'express';
import userRoutes from '../controllers/userControllers';
var router=express.Router();


router.post('/create',userRoutes.createUserList)
router.get('/get',userRoutes.getUserList)
router.patch('/update/:id',userRoutes.updateUserList)
router.patch('/updatelist/:id',userRoutes.updateSpecificUsersList)
router.delete('/delete/:id',userRoutes.deleteuser)
router.post('/register',userRoutes.UserRegister)
router.post('/login',userRoutes.UserLogin)
router.post('/create-update/:id',userRoutes.CreateUser)




export default router;