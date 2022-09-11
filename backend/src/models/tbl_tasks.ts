import {Model,DataTypes} from 'sequelize';
import connect  from "./connect";
const tbl_tasks=connect.define( "tbl_tasks",{
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    expected_end_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    next_followup: DataTypes.DATE,
    assigned_to: DataTypes.INTEGER,
    current_status: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    image: DataTypes.STRING
  });

  export default tbl_tasks;