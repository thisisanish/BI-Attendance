import {Document, Schema} from 'mongoose'
import { ILearner } from './learner.interface';

export interface IEachRecord extends Document{
    studentId: Schema.Types.ObjectId | ILearner,
    status:Boolean,
    date: Date
}
export interface IRecord extends Document{
    record : Array<IEachRecord>
}