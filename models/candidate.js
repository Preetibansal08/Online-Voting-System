const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Define the Candidate schema
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    party:{
        type:String,
        reruired:true
    },
    age:{
        type:Number,
        required: true
    },
    votes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                require: true,
            },
            votedAt:{
                type: Date,
                default: Date.now()
            }
        }
    ],
    voteCount:{
        type: Number,
        default: 0
    }
});

const Candidate = mongoose.model('User' , candidateSchema);
module.exports = Candidate;