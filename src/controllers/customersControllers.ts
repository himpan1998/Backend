import tbl_customers from '../models/tbl_customers'
import Ajv from "ajv"
const ajv = new Ajv()



const createCustomer=async(req:any,res:any)=>{
    try {
        const data =await tbl_customers.create(req.body)
        return res.status(200).send({message:"customers Registration Sucessful",result:data})
    } catch (error) {
        return res.json({message:"Customer Registration not Sucessful"})
    }
}



export default {createCustomer}