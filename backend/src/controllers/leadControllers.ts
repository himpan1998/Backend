import { response } from "express";
import { Where } from "sequelize/types/utils";
import tbl_lead_masters from "../models/tbl_lead_masters";

const createleads=async(req:any,res:any)=>{

           console.log('req',req.body)     
    try {
        const data=await tbl_lead_masters.create(req.body)
        return res.status(200).send(data)
    } catch (error) {
        return res.json({"error":error})
    }
}

const getleads=async(req:any,res:any)=>{
            console.log("ooooooooooo")
    try {
        var data =await tbl_lead_masters.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.json({"error":error})
    }
}
// Update all columns in the table:(using req.body)       
const updateleads=async(req:any,res:any)=>{
    try {
          const{id}=req.body
        const data= await tbl_lead_masters.update(req.body,{where:{
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
        const data= await tbl_lead_masters.update(update_tbl_lead_masters,{where:{
            id:id
        }})
        return res.status(200).send(data)
    } catch (error) {
        return  res.json({"error":error})
    }
}


export default {createleads,getleads,updateleads,updateSpecificleads};


