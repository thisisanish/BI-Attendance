import mongoose from 'mongoose';


const coachSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
    
})

export default mongoose.model('Coach',coachSchema)