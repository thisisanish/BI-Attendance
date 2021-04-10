import {Request,Response} from 'express'
import Course from '../models/course.model'

export const courseAttendance = (req:Request,res:Response)=>{

    Course.findById(req.params.courseId).populate("attendance")
        .then((result:any)=>{
            console.log(result.attendance);
            
            // console.log(result.attendance);
            return(result.attendance.map((element:any)=>{
                return element.record.filter((element:any)=>{
                    return element.studentId == req.params.learnerId
                })[0]
            }
            ));   
        })
        .then(data=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
}
