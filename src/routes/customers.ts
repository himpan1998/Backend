import express from 'express';
import customers from "../controllers/customersControllers"
var  router =express.Router();

router.post('/create',customers.createCustomer);



export default router;