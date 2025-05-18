// function add(a , b){
//     return a+b;
// }
// const result=add(2,5);
// console.log(result);
// console.log('server is running');
// var add=(a,b)=>{return a+b};
// var result =add(4,7);
// console.log(result);
// (function(){
//     console.log("hi cl rha h kya");

// })();//ye function ka btaega
// function callback(){
//     console.log("callback");
// }
// var add=function(a,b,callback){
//     var result=a+b;
//     console.log(result);
//     callback();
// }
// add(2,3,callback);
// var fs =require('fs');
// var os =require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greet.txt','hello'+user.username +'!\n' ,()=>{console.log('file created');

// });
// const notes=require('./notes.js');
// var age=notes.age;
// var result=notes.addnumber(age,67);
// console.log(age);
// console.log("result is "+ result);
//loadadh kadekhege
// var l=require('lodash');
// var arr=[1,2,3,4,5,6,6,7,5,5,3];
// var filter=l.uniq(arr);
// console.log(filter);
// newPerson.name=perdata.name;
  // newPerson.age=perdata.age;
  // newPerson.mobile=perdata.mobile;
  // newPerson.work=perdata.work;
  // newPerson.email=perdata.email;
  // newPerson.address=perdata.address;
import express from 'express';
import db from './db.js';
import Person  from './models/Person.js';
import bodyParser from 'body-parser'; 
import Menu from './models/Menu.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(bodyParser.json());
// const db=require('./db');

//Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! bntai ke public bole to takleef');
});
// app.post('/person',async(req,res)=>{

  // const perdata=req.body;//store incoming data
  // const newPerson=new Person(perdata);

  // newPerson.save((error,person)=>{
  //   if(error){
  //     console.log('error saving person:',error);
  //     res.status(500).json({error:'Internal server error'})

  //   }else{
  //     console.log('data is saved successfully:');
  //     res.status(200).json(person);
  //   }
//   try{
//     const perdata=req.body;//store incoming data
//     const newPeron=new Person(perdata);
//     const response=await newPeron.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }


//   catch(error){
//     console.log(error);
//     res.status(500).json({error:'Internal server error'});
//   }
// })
//get method to fetch the data
// app.get('/person',async(req,res)=>{
//   try{
//     const daata=await Person.find();
//     console.log('data fetched');
//     res.status(200).json(daata);

//   }
//   catch(error){
//     console.log('error fetching data:',error);
//     res.status(500).json({error:'Internal server error'});

//   }
// })



  


  


//})
// app.get('/dhosa',(req,res)=>{
//     res.send('aaeo idi dhosa sambrr chatni chatni ');
// });
// app.get('/sexsus',(req,res)=>{
//   res.send('sste melelo sexsus');
// });

// Start the server on port 4000
//impoting the personroutes
//const personroutes=require('./routes/personroutes.js');
import personroutes from './routes/personroutes.js';
import menuroutes from './routes/menuitems.js';

app.use('/menu',menuroutes);

app.use('/person',personroutes);
//const PORT=process.env.PORT || 4000;

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});