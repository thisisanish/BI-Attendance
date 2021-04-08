import express from 'express'
import {courseAttendance} from '../controllers/learner.controller'

const router = express.Router()

router

.get('/:learnerId/:courseId',courseAttendance)



export default router