import mongoose from 'mongoose';
//person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,

    },
    work:{
        type:String,
        enum : ['chef','waiter','manager'],
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    address:{
        type:String,
        required:true,
    }

});
//create person model
const Person=mongoose.model('person',personSchema);
//export the model
export default Person;