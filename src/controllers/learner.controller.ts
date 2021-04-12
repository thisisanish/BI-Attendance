import { Request, Response } from "express";
import Course from "../models/course.model";
// import { ICourse } from "../interfaces/course.interface";
import { IRecord, IEachRecord } from "../interfaces/record.interface";
// import { Schema } from "mongoose";
export const courseAttendance = (req: Request, res: Response) => {
    Course.findById(req.params.courseId)
        .lean()
        .populate("attendance")

        .then((result) => {
            if (!result) {
                return res.json({});
            }
            // console.log(result.attendance);
            return result.attendance.map((element) => {
                return element.record.filter((element) => {
                    return (
                        element.studentId.toString() === req.params.learnerId
                    );
                })[0];
            });
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err).status(500);
        });
};
