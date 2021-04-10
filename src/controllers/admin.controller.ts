import {Request,Response} from 'express'
import Course from '../models/course.model'
import Learner from '../models/learner.model'

export const getCourses = (req:Request,res:Response)=>{
    Course.find().populate('learners')
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
}

export const createCourse = (req:Request,res:Response)=>{

    const {name} = req.body
    Course.create({name:name})
        .then((result)=>{
            res.json(result);
            
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
}

export const createLearner = (req:Request,res:Response)=>{

    const {name, course} = req.body
    console.log(name,course);
    Learner.create({name:name})
        .then((result)=>{
            res.json(result);
            
        })
        .catch((err)=>{
            res.json(err).status(500)
        })
}
    

export const addLearner = (req: Request, res: Response)=>{

    const {learner,courseId}=req.body

    Course.updateOne({"_id":courseId},{$push:{
        learners: learner
    }})
    .then((result)=>{
        res.json(result)

        Learner.updateOne({"_id":learner},{$push:{
            courses: courseId
        }})

    })
    .catch((err)=>{
        res.json(err).status(500)
    })
        
    
    
}