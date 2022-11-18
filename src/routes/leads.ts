import express, { application } from 'express';
import leadRoutes from '../controllers/leadControllers'
var  router =express.Router();

router.post('/create',leadRoutes.createleads);
router.get('/get',leadRoutes.getleads);
router.patch('/updatelist', leadRoutes.updateleads)
router.patch('/upadtespecific',leadRoutes.updateSpecificleads)


export default router;