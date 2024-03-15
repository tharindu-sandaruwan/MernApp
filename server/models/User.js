const mongoose=require('mongoose');

const Schema =mongoose.Schema

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true
    },

    fname: {
        type : String,
        required : true
    },
    lname: {
        type : String,
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    profilepic: {
        type : String,
        // required : true
      
    },
})

const user=mongoose.model("user",userSchema)

module.exports=user