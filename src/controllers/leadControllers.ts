import { response } from "express";
import { Where } from "sequelize/types/utils";
import tbl_lead_masters from "../models/tbl_lead_masters";
const leaddb=tbl_lead_masters

const createleads=async(req:any,res:any)=>{

           console.log('req',req.body)     
    try {
        const data=await leaddb.create(req.body)
        console.log("data:",data)
        return res.status(200).send(data)
    } catch (error) {
        return res.json({"error":error})
    }
}

const getleads=async(req:any,res:any)=>{
    try {
        var data =await leaddb.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.json({"error":error})
    }
}
// Update all columns in the table:(using req.body)       
const updateleads=async(req:any,res:any)=>{
    try {
          const{id}=req.body
        const data= await leaddb.update(req.body,{where:{
            id:id
        }})
        return res.status(200).send(data)
    } catch (error) {
        return  res.json({"error":error})
    }
}
// Update particular  columns in the table:(using req.body) :  

const updateSpecificleads=async(req:any,res:any)=>{
            console.log('req',req.body);
    try {
          const{id}=req.body
          const update_tbl_lead_masters={
            full_name: req.body.full_name,
            email:req.body.email,
            profession:req.body.profession,
          }
        const data= await leaddb.update(update_tbl_lead_masters,{where:{
            id:id
        }})
        return res.status(200).send(data)
    } catch (error) {
        return  res.json({"error":error})
    }
}


const leadRoutes:any= {createleads,getleads,updateleads,updateSpecificleads};


export default leadRoutes;


