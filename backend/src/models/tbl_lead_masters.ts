import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_lead_masters=connect.define( "tbl_lead_masters",{
    full_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    profession: DataTypes.STRING,
    address: DataTypes.STRING,
    lead_type_id: DataTypes.INTEGER,
    lead_source: DataTypes.INTEGER,
    assigned_to: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    location_by_district: DataTypes.STRING,
    pincode: DataTypes.INTEGER,
    state_name: DataTypes.STRING,
    district_name: DataTypes.STRING,
    state_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    plot_size: DataTypes.INTEGER
  });


  export default  tbl_lead_masters ;