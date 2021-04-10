import mongoose,{model, Schema} from 'mongoose'

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

export default mongoose.model("Record",recordSchema)