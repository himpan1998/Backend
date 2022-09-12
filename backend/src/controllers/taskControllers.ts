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
// gettasks using Seque. findAll method:  which will retrieve all entries from the table
const gettasks=async(req:any,res:any)=>{
    try {
        var data=await tbl_tasks.findAll()
        return res.status(200).send(data)
    } catch (error) {
       return res.json({"error":error}) 
    }

}

// gettask using sequelize findone method: always gives output as a Object and gives one row
//  as a output which meet condition the condition:

const getonetask=async(req:any,res:any)=>{
    try {
        const data= await tbl_tasks.findOne({
            where:{current_status:80},
        });
            //  console.log(data.toJSON())
            return  res.status(200).send(data)
    } catch (error) {
         return res.json({"error":error})
    }
}

// gettasks using Sequelize findbypk method: gives one row
//  as a output which meet condition:

const gettasksbypk=async(req:any,res:any)=>{
    try {
        const data= await tbl_tasks.findByPk(3);
            //  console.log(data.toJSON())
            return  res.status(200).send(data)
    } catch (error) {
         return res.json({"error":error})
    }
}
// const gettasksbypk=async(req:any,res:any)=>{
// const data = await tbl_tasks.findByPk(2);
// if (data === null) {
//   console.log('Not found!');
  
// } else {
//   console.log( 'data found'); // true
//   // Its primary key is 2
//    return res.status(200).send(data)
// }
// }
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

// delete data using  body:
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

export default {createtasks,
                 gettasks,
                getonetask,
                gettasksbypk,
                updatetask,
                deletetask,
                delete_one}