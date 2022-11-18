import tbl_customers from '../models/tbl_customers'
import Ajv from "ajv"
const ajv = new Ajv()
const customerdb=tbl_customers


// API end-point to insert customer:
const createCustomer=async(req:any,res:any)=>{
    try {
        const data =await customerdb.create(req.body)
        return res.status(200).send({message:"customers Registration Sucessful",result:data})
    } catch (error) {
        return res.json({message:"Customer Registration not Sucessful"})
    }
}


// API end-point to get all list of customer:
const getCustomer=async(req:any,res:any)=>{
    try {
        const data= await customerdb.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send("error")
    }
    
}


const customerRoutes:any={createCustomer,getCustomer}

export default customerRoutes;