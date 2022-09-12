// import {Op} from 'sequelize'
import { where } from "sequelize/types"
import tbl_tasks from "../models/tbl_tasks"

const createtasks=async(req:any,res:any)=>{
    try {
        var data=await tbl_tasks.create(req.body)
        return res.status(200).send(data)
    } catch (error) {
       return res.json({"error":error}) 
    }
}

const gettasks=async(req:any,res:any)=>{
    try {
        var data=await tbl_tasks.findAll()
        return res.status(200).send(data)
    } catch (error) {
       return res.json({"error":error}) 
    }

}

const updatetask=async(req:any,res:any)=>{
    console.log('req',req.body)
      
    // const {id}=req.query
    // const {id}=req.body
    const {id}=req.params
    const update_tbl_tasks={
        title:req.body.title,
        current_status:req.body.current_status
    }
    
    const data=await tbl_tasks.update(update_tbl_tasks,{where:{
        id:id
    }})
    .then(result=>{
        res.send({
            status:true,
            messsage:`modify data has been change:`,
            result:result
        })
    })
    .catch(e=>{
        res.send({
            status:false,
            messsage:`not modify data:${e}`,
        
        })
    })
        
    
}

// delete data using from body:
    const deletetask= async(req:any,res:any)=>{
              var {id}=req.body
              console.log('id:', req.body)
            //   var id=req.body.id
            
        try {
            const data =await tbl_tasks.destroy({
                    where:{id:id}
            })
            return res.json(data)
        } catch (error) {
           return res.json({"error":error})
        }
    }

    // delete data using params:
    const delete_one=async(req:any,res:any)=>{
        try {
            const {id}=req.params
            const data=await tbl_tasks.destroy({where:{
                id:id
            }})
            return res.json(data)
        } catch (error) {
            return res.json({"error":error})
            
        }
    }

export default {createtasks,gettasks,updatetask,deletetask,delete_one}