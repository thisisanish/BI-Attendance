import  { Schema, model, Model, Document } from 'mongoose'

import {ICourse} from "../interfaces/course.interface"

const courseSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    coach:{
        type: Schema.Types.ObjectId,
        ref: 'Learner'
    },
    learners:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Learner'
        },
    ],
    
    attendance: [
        { 
            type :Schema.Types.ObjectId,
            ref: "Record"
        }
    ]
})
const Course : Model<ICourse> = model('Course',courseSchema)
export default Course