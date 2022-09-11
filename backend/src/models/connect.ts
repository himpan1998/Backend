import { Sequelize,DataTypes }  from 'sequelize';
const env:any =process.env.ENV;
const config =require(__dirname +"/../config/config.json")
const mydb=config.development
console.log('pass',mydb.username)
const sequelize= new Sequelize (mydb.database,mydb.username,mydb.password, {
    host:'localhost',
    dialect:'mysql',
    logging:true
});

 sequelize.authenticate().then(function(sucess){
    console.log('Connection has been established successfully.');
 }). catch((error)=> {
    console.error('Unable to connect to the database:', error);
  });

  export default sequelize;