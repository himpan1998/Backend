import tbl_users from "../models/tbl_users";

const createUserList = async (req: any, res: any) => {

    try {
        var data = await tbl_users.create(req.body)
        console.log('data', data)
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }
}

const getUserList = async (req: any, res: any) => {
    try {
        var data = await tbl_users.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}

// Update all columns in the table:(using req.query)       
const updateUserList = async (req: any, res: any) => {
    console.log('body:', req.body)
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

// Update particular columns in the table:(using req.query)  :
const updateSpecificUsersList = async (req: any, res: any) => {
    console.log('body:', req.body)
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

export default {
    createUserList,
    getUserList,
    updateUserList,
    updateSpecificUsersList
    
};