import express from "express"
import {createAttendance,getCourses} from "../controllers/course.controller"

const router = express.Router()

router

.get("/",getCourses)

.post("/mark/:courseId",createAttendance)



export default router