import mongoose, { Schema } from 'mongoose'

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    coach:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learner'
    },
    learners:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Learner'
        },
    ],
    
    attendance: [
        { 
            type :mongoose.Schema.Types.ObjectId,
            ref: "Record"
        }
    ]
})

export default mongoose.model('Course',courseSchema)