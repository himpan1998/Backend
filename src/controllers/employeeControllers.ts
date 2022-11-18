import tbl_employee_activities from "../models/tbl_employee_activities";
const employeeActivitesdb=tbl_employee_activities
const createEmployeesList = async (req: any, res: any) => {

    try {
        var data = await employeeActivitesdb.create(req.body)

        console.log('data', data)
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }
}

const getEmployeesList = async (req: any, res: any) => {
    try {
        var data = await employeeActivitesdb.findAll()
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}

// Update all columns in the table:(using req.query)       
const updateEmployeeList = async (req: any, res: any) => {
    console.log('body:', req.body)
    try {
        const { id } = req.query
        console.log('id', id);

        const data = await employeeActivitesdb.update(req.body, {
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
const updateSpecificEmployeeList = async (req: any, res: any) => {
    console.log('body:', req.body)
    try {
        const { id } = req.query
        //    console.log('id',id);
        const update_tbl_employee_activities = {

            task_title: req.body.task_title,
            assigned_to: req.body.assigned_to,
            remarks: req.body.remarks

        }
        const data = await employeeActivitesdb.update(update_tbl_employee_activities, {
            where: {
                id: id
            }
        })
        return res.status(200).send(data)
    } catch (error) {
        return res.json({ "error": error })
    }

}

 const employeeActivitiesRoutes:any={
    createEmployeesList,
    getEmployeesList,
    updateEmployeeList,
    updateSpecificEmployeeList
};
export default employeeActivitiesRoutes;