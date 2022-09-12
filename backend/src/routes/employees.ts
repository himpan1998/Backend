import express from 'express';
import employees from "../controllers/employeeControllers"
var  router =express.Router();

router.post('/create',employees.createEmployeesList);
router.get('/get',employees.getEmployeesList);
router.patch('/updatelist', employees.updateEmployeeList);
router.patch('/upadtespecific',employees.updateSpecificEmployeeList)


export default router;