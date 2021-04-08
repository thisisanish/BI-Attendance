import {Request,Response} from 'express'
import Course from '../models/course.model'


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

    Course.updateOne({"_id":req.params.courseId},{
        $push:{
            attendance: {
                record:req.body
            }
        }
    })
        .then((result)=>{
            res.json(result)
                
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
}