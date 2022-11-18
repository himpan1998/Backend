import express from 'express';
import taskRoutes from '../controllers/taskControllers';
var router=express.Router();

import multer from 'multer';
const storage =multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'./image')
    },
    filename:function (req,file,cb) {
        cb(null,Date.now()+ '--' + file.originalname)
    }
});
const upload=multer({storage: storage});
router.post('/imageupload',upload.single("image"),taskRoutes.createImage);

router.post('/create',taskRoutes.createtasks)
router.get('/gettask',taskRoutes.gettasks)
router.get('/getone',taskRoutes.getonetask)
router.get('/getbyPk',taskRoutes.gettasksbypk)
router.patch('/update/:id',taskRoutes.updatetask)
router.delete('/deleteone/:id',taskRoutes.delete_one),
router.get('/taskbyusername',taskRoutes.gettaskbyUsername)

export default router;