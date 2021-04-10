import {Request,Response} from 'express'
import Course from '../models/course.model'
import Record from '../models/record.model'

export const getCourses = (req:Request,res:Response)=>{
    Course.find().populate('learners').select('name')
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
}


export const createAttendance = (req :Request, res: Response)=>{
    const{record,courseId} = req.body

    Record.create({record:record})
    .then(record=>{

        
        Course.updateOne({"_id":courseId},{
            $push:{
                attendance: record.id
            }
        })
        .then((result)=>{
    
            
            res.json(result)
                
        })
        .catch((err)=>{

            
            res.json(err).status(500)
        })
        
    })
    
        
}