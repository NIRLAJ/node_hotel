
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
dotenv.config();
//const mongoose=require('mongoose');
const mongoURL=process.env.db_URL;

//define the mongoDB conection to URL
//const mongoURL='mongodb://localhost:27017/hotel';
//const mongoURL = 'mongodb+srv://Sahil_Yadav1:lVVG8CUYG@cluster0.tvwt6hs.mongodb.net/';

//set up mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useUnifiedTopology:true,
})
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongoDB server');
})
db.on('error',()=>{
    console.log('error to mongoDB server');
})
db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server');
})
//exxport the connection
export default db;
