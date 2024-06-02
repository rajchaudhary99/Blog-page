const mongoose = require("mongoose");
const validator = require("validator");

var userSchema =  mongoose.Schema({
    name: { type : String ,
         required: true,
         minLength:3
        },
        email:{type:String,
            required:true,
            unique:true,validate(value){
                if (!validator.isEmail(value)) {
                   throw new Error('Invalid Email')
               }
        }
        },
        phone:{
            type:Number,
            require:true,
            min:10
        },

        message:{
            type:String,
            require:true,
            minLength:3
        },
        date:{
            type:Date,
            default: Date.now
        }

})

//collection

const User= mongoose.model('User',userSchema);

module.exports= User;
