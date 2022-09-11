import {Op} from 'sequelize'
import tbl_tasks from "../models/tbl_tasks"

const createtasks=async(req:any,res:any)=>{
    try {
        var data=await tbl_tasks.create(req.body)
        return res.send(data)
    } catch (error) {
       return res.json({"error":error}) 
    }
}

export default {createtasks}