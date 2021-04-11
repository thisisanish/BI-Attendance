import mongoose,{model, Schema} from 'mongoose'
import {IRecord} from '../interfaces/record.interface'




const recordSchema = new Schema ({
    record:[
        {
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Learner'
            },
            status:{
                type:Boolean
            },
            date:{
                type:Date,
                default: Date.now()
            },
        }
    ]
},{
    timestamps:true
})

export default mongoose.model<IRecord>("Record",recordSchema)