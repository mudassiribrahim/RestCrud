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
module.exports = mongoose.model('data',dataSchema)