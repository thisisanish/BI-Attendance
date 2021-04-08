import mongoose from 'mongoose';


const learnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    courses:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
        }
    ],
})

export default mongoose.model('Learner',learnerSchema)