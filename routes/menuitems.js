import express from 'express';
import Menu from './../models/Menu.js';
const router=express.Router();
router.post('/',async(req,res)=>{
  try{
    const menudata=req.body;
    const newMenu=new Menu(menudata);
    const response=await newMenu.save();
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
    const daata=await Menu.find();
    console.log('data fetched');
    res.status(200).json(daata);

  }
  catch(error){
    console.log('error fetching data:',error);
    res.status(500).json({error:'Internal server error'});

  }
})
router.get('/:taste',async(req,res)=>{
  try{
        const taste= req.params.taste; 
        if(taste=='spicy'||taste=='sweet'||taste=='sour'||taste=='bitter'||taste=='salty'){
        const respon=await Menu.find({taste:taste});
        console.log('respose frtched');
        res.status(200).json(respon);
    
        }
        else{
        res.status(404).json({error: 'Invalid taste type'});
        }

  }
  catch(error){
    console.log('error fetching data:',error);
    res.status(500).json({error:'Internal server error'});

  }
})
export default router;