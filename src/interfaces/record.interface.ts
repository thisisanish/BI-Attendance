import {Document} from 'mongoose'
import { ILearner } from './learner.interface';

export interface IEachRecord extends Document{
    studentId: ILearner,
    status:Boolean,
    date: Date
}
export interface IRecord extends Document{
    record : Array<IEachRecord>
}