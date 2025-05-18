
import mongoose from 'mongoose'; 
//const mongoose=require('mongoose');

//define the mongoDB conection to URL
const mongoURL='mongodb://localhost:27017/hotel';

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
