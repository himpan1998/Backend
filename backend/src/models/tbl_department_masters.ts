import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_department_masters=connect.define( "tbl_department_masters",{
    department_name: DataTypes.STRING
  
  });

  export default tbl_department_masters;
 