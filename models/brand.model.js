import mongoose, { Schema } from "mongoose";
import subcategoyModel from "./subcategoy.model";

const BrandSchema = Schema({
    title:{
        type:String,
        required:true
    },
    subcategory:{
        type:Schema.Types.ObjectId,
        ref:subcategoyModel,
        default:null,
    },
    status:{
        type:Number,
        default:1,
    },
    created_at:{
        type:Date,
        default:Date.now(),
    }

})

export default mongoose.model("brand", BrandSchema)