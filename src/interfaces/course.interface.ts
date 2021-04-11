import {Document,Schema} from 'mongoose'
import { ILearner } from './learner.interface';
import { IRecord } from './record.interface';

export interface ICourse extends Document{
    name: String,
    coach : Schema.Types.ObjectId ,
    Learners: Schema.Types.ObjectId |Array<ILearner>,
    attendance: Schema.Types.ObjectId |Array <IRecord>
}
