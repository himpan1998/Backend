import tbl_users from "../models/tbl_users";
const jwt=require('jsonwebtoken');
import jwt_decode from 'jwt-decode';
import Ajv from "ajv";
import addFormats from "ajv-formats"
import tbl_user_schema from "./validator";
const ajv =new Ajv()
addFormats(ajv,["date","email"]);
const bcrypt=require('bcryptjs') ;



const getUserList = async (req: any, res: any) => {
    try {
        var data = await tbl_users.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}

// Update all columns in the table:(using req.params)       
const updateUserList = async (req: any, res: any) => {
    try {
        const { id } = req.params
        console.log('id', id);

        const data = await tbl_users.update(req.body, {

            where: {
                id: id
            }
        })
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }
}

// Update particular columns in the table:(using req.params)  :
const updateSpecificUsersList = async (req: any, res: any) => {
    
    try {
        const { id } = req.params
        //    console.log('id',id);
        const update_tbl_users = {
             name:req.body.name,
             dob: req.body.dob,
             phone: req.body.phone,
             email:req.body.email
        }
        const data = await tbl_users.update(update_tbl_users, {
            where: {
                id: id
            }
        })
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}


const UserRegister= async (req:any,res:any)=>{
    const {phone,password}=req.body
    const salt = await bcrypt.genSalt(10);
    const hasspassword= await bcrypt.hash(password ,salt);
    console.log('pass:',hasspassword);
    try {
        const{name,dob,phone,email,address,password}=req.body;
        if(!(name && dob && phone && email && address && password)){
         return res.status(400).send("Please Enter All Required Inputs.");
        }  
         const oldUser_exits= await tbl_users.findOne({
            where:{
                 phone,
                 password 
            }
         })
     if(oldUser_exits)
        return res.status(409).send("User Already Exist.Please Login");
    
    let createbody={
        name,
        dob,
        phone,
        email,
        address,
        password
    }
    console.log(createbody);
     let validate= ajv.compile(tbl_user_schema);
     let valid=validate(createbody);
     console.log(validate.errors);
    if(!valid) {
        return res.status(500).send("Input are not valid")
    }
       const user= await tbl_users.create(createbody)
       return res.status(200).send("User Registration is Sucessful")
    }
     catch (error) {
        console.log(error);
        return res.json({"error":error}) 
    }
}


const createUserList = async (req: any, res: any) => {

    try {
        var data = await tbl_users.create(req.body)
        console.log('data', data)
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }
}

export default {
    createUserList,
    getUserList,
    updateUserList,
    updateSpecificUsersList,
    UserRegister
    
};