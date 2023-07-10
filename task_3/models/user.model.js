const mongoose = require ('mongoose')
const validator = require ('validator')


const userSchema = new mongoose.Schema ( {
    username : {
        type: String,
        required : true,
        trim : true
    },
    password : {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        

    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase : true,
        unique: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error ('Email is INVALID')
            }
        }
    },
    roles : [
        {
            type: String,
            required : true
        }
    ],
    notes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Note"
        }
    ]
})


// virtual relations 

  userSchema.virtual ('notes' , {
     ref: 'Note',
     localField : "_id",
     foreignField :"owner"
  }) 


  const User = mongoose.model( 'User' , userSchema  )





  module.exports = User