import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
      isActive:{
        type:Boolean,
        default: false
    },
    date:{
        type:String,
        required:true
    }
})

const Tasbiix = mongoose.model("tasbiix", userSchema);

export default Tasbiix;