import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    }
})
const model = mongoose.model('data',dataSchema)

export default model