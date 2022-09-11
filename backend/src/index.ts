import express, { Router } from 'express'
import multer from 'multer'
import cors from 'cors'
const jwt=require('jsonwebtoken');
import bodyParser from 'body-parser'
import Sequelize from 'sequelize'
import sequelize from './models/connect'
import{json,urlencoded} from 'body-parser'
import routes from './routes';
const app=express()

app.use(json())
app.use(cors())
app.use(urlencoded({extended:true}))
app.use('/tasks',routes.tasksRoutes)

app.listen(7000,()=>{
console.log("running on 7000 port")


})