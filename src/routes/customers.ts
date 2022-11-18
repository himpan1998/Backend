import express from 'express';
import customerRoutes from "../controllers/customersControllers"
var  router =express.Router();

router.post('/create',customerRoutes.createCustomer);
router.get('/get',customerRoutes.getCustomer);



export default router;