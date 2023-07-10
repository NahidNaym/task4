const mongoose = require('mongoose')

const Note = mongoose.model('Note',{
    title:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    },
    ticketNo:{
        type:Number,
        required:true,
        uniqui:tru ,
        validate(val){
         //    
            if(val<20)
            throw new Error (" ")}
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref : 'User'  // Model
    }
})

module.exports = Note