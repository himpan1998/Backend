import express  from 'express'
import multer from 'multer'
import cors from 'cors'
const jwt=require('jsonwebtoken');
import verifyToken from './middleware/verifytoken';
import jwtDecode from 'jwt-decode';
require('dotenv').config();
import sequelize from './models/connect'
import routes from './routes';
import bodyParser from 'body-parser'
import Sequelize from 'sequelize'
import{json,urlencoded} from 'body-parser'
import crypto from 'crypto';
const app=express()

app.use(json())
app.use(cors())
app.use(urlencoded({extended:true}))
app.use('/tasks',routes.tasksRoutes)
app.use('/leads',routes.leadsRoutes)
app.use('/employees',routes.employeesRoutes)
app.use('/users',routes.usersRoutes)
app.use('/customers',routes.customersRoutes)

app.listen(7000,()=>{
console.log("running on 7000 port")


})
