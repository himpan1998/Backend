import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_employee_activities=connect.define( "tbl_employee_activities",{
    task_title: DataTypes.STRING,
    assigned_to: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.STRING,
    remarks: DataTypes.STRING,
    image: DataTypes.STRING
  });

  export default tbl_employee_activities;