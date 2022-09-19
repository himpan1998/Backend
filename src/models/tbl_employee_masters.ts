import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_employee_masters=connect.define( "tbl_employee_masters",{
    employee_name: DataTypes.STRING,
    department_id: DataTypes.INTEGER,
    date_of_birth: DataTypes.DATE
  });

  export default tbl_employee_masters;