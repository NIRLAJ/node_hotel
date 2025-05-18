import mongoose  from "mongoose";
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,

    },
    taste:{
        type:String,
        enum:["spicy","sweet","sour","bitter","salty"],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
        required:true,
    },
    ingreadients:{
        type:[String],
        required:true,
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }

})
//exporting the model
const Menu=mongoose.model("Menu",menuSchema);
export default Menu;