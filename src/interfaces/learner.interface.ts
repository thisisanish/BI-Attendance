import {Document, Schema} from 'mongoose'
import { ICourse } from './course.interface';

export interface ILearner extends Document{
    name:String,
    courses: Schema.Types.ObjectId |Array<ICourse>
}
