// import {Op} from 'sequelize'
import { where } from "sequelize/types"
import tbl_tasks from "../models/tbl_tasks"
import tbl_users from "../models/tbl_users";
const taksdb=tbl_tasks
const userdb=tbl_users

const createtasks=async(req:any,res:any)=>{
    try {
        var data=await taksdb.create(req.body)
        console.log("data:",data);
        return res.status(200).send(data)
    } catch (error) {
       return res.json({"error":error}) 
    }
}
// gettasks using Seque. findAll method:  which will retrieve all entries from the table
const gettasks=async(req:any,res:any)=>{
    try {
        var data=await taksdb.findAll()
        return res.status(200).send(data)
    } catch (error) {
       return res.json({"error":error}) 
    }

}

// gettask using sequelize findone method: always gives output as a Object and gives one row
//  as a output which meet condition the condition:

const getonetask=async(req:any,res:any)=>{
    try {
        const data= await taksdb.findOne({
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
        const data= await taksdb.findByPk(3);
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
    
    const data=await taksdb.update(update_tbl_tasks,{where:{
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
            const data =await taksdb.destroy({
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
            const data=await taksdb.destroy({where:{
                id:id
            }})
            return res.json(data)
        } catch (error) {
            return res.json({"error":error})
            
        }
    }

//file upload using Multer
 const createImage=async(req:any,res:any)=>{
    req.body.image=req.file.path || null ;
    try {
        var data =await taksdb.create(req.body)
        return res.send(data);
    } catch (error) {
        return res.json({"error":error})
    }
 }

const gettaskbyUsername=async(req:any,res:any)=>{
    try {
        var resp= await taksdb.findAll({
            attributes:['title','description','start_date','expected_end_date','end_date','next_followup','assigned_to','current_status','created_by','image'],
            include:[
                {
                    attributes:['name'],
                    model:userdb,
                    as:'user'
                }
        
            ]  
        })
        return res.send(resp)
    } catch (error) {
        return res.json({"error":error})
    }
   
}


const taskRoutes:any= {createtasks,
                 gettasks,
                getonetask,
                gettasksbypk,
                updatetask,
                deletetask,
                delete_one,
                createImage,
                gettaskbyUsername
            }
 export default taskRoutes;