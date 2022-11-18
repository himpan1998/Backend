import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_customers=connect.define( "tbl_customers",{
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    address: DataTypes.STRING,
    pincode: DataTypes.STRING
  })
  export default tbl_customers;