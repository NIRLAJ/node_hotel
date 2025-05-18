//const express=require('express');
import express from 'express';
import Person  from './../models/Person.js';
import pkg from 'prompt';
const { message } = pkg;
const router=express.Router();

//POST route to add a new person
router.post('/',async(req,res)=>{

  try{
    const perdata=req.body;//store incoming data
    const newPeron=new Person(perdata);
    const response=await newPeron.save();
    console.log('data saved');
    res.status(200).json(response);
  }


  catch(error){
    console.log(error);
    res.status(500).json({error:'Internal server error'});
  }
})
router.get('/',async(req,res)=>{
  try{
    const daata=await Person.find();
    console.log('data fetched');
    res.status(200).json(daata);

  }
  catch(error){
    console.log('error fetching data:',error);
    res.status(500).json({error:'Internal server error'});

  }
})
router.get('/:wordtype',async (req,res)=>{
  try{
     const worktype= req.params.wordtype; 
     if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
      const respon=await Person.find({work:worktype});
      console.log('respose frtched');
      res.status(200).json(respon);

     }
     else{
      res.status(404).json({error: 'Invalid work type'});
     }

  }
  catch(err){
    console.log('error fetching data:',err);
    res.status(500).json({error:'Internal server error'});

  }
 
})
router.put('/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const updatedata=req.body;
    const response=await Person.findByIdAndUpdate(id,updatedata,{
    new:true,
    runvalidationSync:true,
  });
  if(!response){
    return res.status(404).json({error:'Person not found'});
  }
      
    console.log('data updated');
    res.status(200).json(response);
  }
  catch(error){
    console.log('error updating data:',error);
    res.status(500).json({error:'Internal server error'});
  }
})
//deleting person id
router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message:'Person deleted successfully'});

  }
  catch(error){
    console.log('error deleting data:',error);
    res.status(500).json({error:'Internal server error'});

  }
});
//exporting the router
export default router;
