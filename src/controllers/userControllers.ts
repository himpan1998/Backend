import tbl_users from "../models/tbl_users";
const jwt = require('jsonwebtoken');
import jwt_decode from 'jwt-decode';
import Ajv, { stringify } from "ajv";
import addFormats from "ajv-formats"
import schemaValidator from "./validator";
import { Model } from "sequelize/types";
const ajv = new Ajv()
addFormats(ajv, ["date", "email"]);
const bcrypt = require('bcryptjs');
const userdb = tbl_users

// API end-point to get all user list:

const getUserList = async (req: any, res: any) => {
    try {
        var data = await userdb.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}


// API end-point to insert  user :
const createUserList = async (req: any, res: any) => {

    try {
        var data = await userdb.create(req.body)
        console.log('data', data)
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }
}

// API end-point to insert and update user :
const CreateUser = async (req: any, res: any) => {
    try {
        let { id } = req.params
        let validate = ajv.compile(schemaValidator.userSchema);
        let valid = validate(req.body);
        if (!valid)
            return res.status(500).send("Input are not valid")
        var isAvl = await userdb.findOne({
            where: {
                id: id
            }
        })
        if (isAvl) {
            var update = await userdb.update(req.body, {
                where: {
                    id: id
                }
            })
            return res.status(200).send({ message: "update successfully", result: update })
        }
        else {
            var data = await userdb.create(req.body)
            return res.status(200).send(data)
        }

    } catch (error) {
        return res.json({ "error": error })
    }
}



// API end-point to Update all columns in the table:(using req.params) :      
const updateUserList = async (req: any, res: any) => {
    try {
        const { id } = req.params
        console.log('id', id);

        const data = await userdb.update(req.body, {

            where: {
                id: id
            }
        })
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }
}

// API end-point to Update particular columns in the table:(using req.params):
const updateSpecificUsersList = async (req: any, res: any) => {

    try {
        const { id } = req.params
        //    console.log('id',id);
        const update_tbl_users = {
            name: req.body.name,
            dob: req.body.dob,
            phone: req.body.phone,
            email: req.body.email
        }
        const data = await userdb.update(update_tbl_users, {
            where: {
                id: id
            }
        })
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}


// API end-point to remove user by id :
const deleteuser = async (req: any, res: any) => {
    let id = req.params.id
    console.log(id)
    try {
        var resp = await userdb.destroy({
            where: { id: id }
        })
        return res.json(resp)
    } catch (error) {
        return res.json({ "error": error })
    }
}

// API end-point to user registration:
const UserRegister = async (req: any, res: any) => {
    const { password } = req.body
    const salt = await bcrypt.genSalt(10);
    const hasspassword = await bcrypt.hash(password, salt);
    console.log('pass:', hasspassword);
    try {
        //Get user Input
        const { name, dob, phone, email, address, password } = req.body;
        // validate user input
        if (!(name && dob && phone && email && address && password)) {
            return res.status(400).send("Please Enter All Required Inputs.");
        }
        const oldUser_exits = await userdb.findOne({
            where: {
                phone,
                password
            }
        })
        if (oldUser_exits)
            return res.status(409).send("User Already Exist.Please Login");

        let createbody = {
            name,
            dob,
            phone,
            email,
            address,
            password: hasspassword
        }
        // console.log(createbody);
        let validate = ajv.compile(schemaValidator.userSchema);
        let valid = validate(createbody);
        console.log('isvalid', valid)
        console.log(validate.errors);
        if (!valid) {
            return res.status(500).send("Input are not valid")
        }
        const user = await userdb.create(createbody)
        return res.status(200).send("User Registration is Sucessful")
    }
    catch (error) {
        console.log(error);
        return res.json({ "error": error })
    }
}


// API end-point for userlogin :
const UserLogin = async (req: any, res: any) => {
    const { phone, password } = req.body
    console.log("data:", req.body)
    try {
        const users = await userdb.findOne({
            where: {
                phone,
                password
            }
        })
        console.log(users)
        if (!users) {
            return res.status(401).json({
                message: "Login is not  Sucessful",
                error: "User not found",
            })
        }
        else {
            const token = await generateToken(users)
            return res.status(200).json({
                message: "Login Sucessful",
                users,
                token
            })



        }
    } catch (error) {
        res.status(400).json({
            message: "An error Occured",
            error: "Log is not Sucessful"
        })

    }

}

// To generate token:
const generateToken = async (user: any) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY
    console.log('key', jwtSecretKey)
    let data = {
        time: Date(),
        userId: user.id,
    }
    try {
        const token = jwt.sign(data, jwtSecretKey);
        return token
    } catch (error) {
        return null
    }
}

// To validate Token 
const validateToken = async (req: any, res: any) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Sucessfully Verified");
        }
        else {
            // Acess Denied
            return res.status(401).send(Error);

        }
    } catch (error) {
        //Acess Denied
        return res.status(401).send(error);
    }
}


const userRoutes: any = {
    createUserList,
    getUserList,
    updateUserList,
    updateSpecificUsersList,
    deleteuser,
    UserRegister,
    UserLogin,
    validateToken,
    CreateUser,
}
export default userRoutes;




