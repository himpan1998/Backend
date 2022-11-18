import express from 'express';
import employeeActivitiesRoutes from "../controllers/employeeControllers"
var  router =express.Router();

router.post('/create',employeeActivitiesRoutes.createEmployeesList);
router.get('/get',employeeActivitiesRoutes.getEmployeesList);
router.patch('/updatelist', employeeActivitiesRoutes.updateEmployeeList);
router.patch('/upadtespecific',employeeActivitiesRoutes.updateSpecificEmployeeList)


export default router;