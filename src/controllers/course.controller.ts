import { Request, Response } from "express";
import { UpdateWriteOpResult } from "mongoose";
import Course from "../models/course.model";
import Record from "../models/record.model";

export const getCourses = async (req: Request, res: Response) => {
    try {
        const getThoseCourses = Course.find();
        getThoseCourses.populate("learners").select("name");
    } catch (error) {
        res.json(error).status(500);
    }
};

export const createAttendance = async (req: Request, res: Response) => {
    const { record, courseId } = req.body;
    try {
        const createRecord = await Record.create({ record: record });
        let result: UpdateWriteOpResult = await Course.updateOne(
            { _id: courseId },
            {
                $push: {
                    attendance: createRecord.id,
                },
            }
        );
        res.json(result);
    } catch (error) {
        res.json(error).status(500);
    }
};
