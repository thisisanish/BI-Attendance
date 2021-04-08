import express from 'express';
import courseRoute from './routes/course.route'
import adminRoute from './routes/admin.route'
import learnerRoute from './routes/learner.route'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 5000
mongoose.connect("mongodb+srv://thisisanish:strongpassword@cluster0.oduzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
  useCreateIndex:true,
  useUnifiedTopology:true,
  useNewUrlParser: true  
}).then(()=>{
    console.log(`\😁 Connected to the Database`);
    
}).catch((err)=>{
    console.log(`😭 Database Connection Unsuccessful \n `);
    
})

app.use(express.json())
app.use("/course",courseRoute)
app.use("/admin",adminRoute)
app.use("/learner",learnerRoute)

app.listen(PORT,()=>{
    console.log(`😁 Running on Port : ${PORT}`);
})
