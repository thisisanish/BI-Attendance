import express from "express"
import {getCourses,createCourse,addLearner,createLearner} from "../controllers/admin.controller"

const router = express.Router()

router
.get("/courses",getCourses)

.post("/create/course",createCourse)
.post("/create/learner",createLearner)

.post("/addlearner/",addLearner )

    



export default router