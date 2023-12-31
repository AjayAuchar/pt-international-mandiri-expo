const mongoose = require("mongoose");

 const user_schema = mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    companyName : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model("UserDataCollection", user_schema);
