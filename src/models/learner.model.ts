import {Schema, model} from 'mongoose';
import {ILearner} from '../interfaces/learner.interface'


const learnerSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    courses:[
        {
        type: Schema.Types.ObjectId,
        ref: "Course"
        }
    ],
})

const Learner = model<ILearner>('Learner',learnerSchema)
export default Learner
