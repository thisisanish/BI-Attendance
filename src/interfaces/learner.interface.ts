import {Document} from 'mongoose'
import { ICourse } from './course.interface';

export interface ILearner extends Document{
    name:String,
    courses: Array<ICourse>
}
