import express, { application } from 'express';
import leads from '../controllers/leadControllers'
var  router =express.Router();

router.post('/create',leads.createleads);
router.get('/get',leads.getleads);
router.patch('/updatelist', leads.updateleads)
router.patch('/upadtespecific',leads.updateSpecificleads)


export default router;