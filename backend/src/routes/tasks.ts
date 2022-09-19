import express from 'express';
import tasks from '../controllers/taskControllers';
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
router.post('/imageupload',upload.single("image"),tasks.createImage);

router.post('/create',tasks.createtasks)
router.get('/gettask',tasks.gettasks)
router.get('/getone',tasks.getonetask)
router.get('/getbyPk',tasks.gettasksbypk)
router.patch('/update/:id',tasks.updatetask)
router.delete('/delete',tasks.deletetask)
router.delete('/deleteone/:id',tasks.delete_one)
// router.post('/image',tasks.createImage)
router.get('/taskbyusername',tasks.gettaskbyUsername)

export default router;