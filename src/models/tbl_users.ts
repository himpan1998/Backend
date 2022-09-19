import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_users=connect.define( "tbl_users",{
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING
  });

  export default tbl_users;