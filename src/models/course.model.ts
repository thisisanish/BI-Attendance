import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    coach:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learner'
    },
    learners:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Learner'
        },
    ],
    
    attendance: [
        {
            date:{
                type:Date,
                default: Date.now()
            },
            
            record:[
                {
                    studentId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Learner'
                    },
                    status:{
                        type:Boolean
                    }
                }
                
            ]

        }
    ]
})

export default mongoose.model('Course',courseSchema)