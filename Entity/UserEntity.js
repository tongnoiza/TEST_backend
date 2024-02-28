import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../dbconnect.js';
import data from '../data/data.json' assert { type: "json" };
console.log(data.length);
 class User extends Model {}

User.init({ 
    firstname:DataTypes.STRING,
    lastname:DataTypes.STRING,
    role:DataTypes.STRING,
    rfid:DataTypes.STRING,
    door_mode:DataTypes.STRING,
    result:DataTypes.STRING,
  },{sequelize})

  export default User