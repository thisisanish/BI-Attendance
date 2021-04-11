import { Request, Response } from "express";
import Course from "../models/course.model";
import { ICourse } from "../interfaces/course.interface";
import { IRecord, IEachRecord } from "../interfaces/record.interface";
import { Schema } from "mongoose";
export const courseAttendance = (req: Request, res: Response) => {
    Course.findById(req.params.courseId)
        .populate("attendance")
        .then((result: any) => {
            // console.log(result.attendance);
            return result.attendance.map((element: IRecord) => {
                return element.record.filter((element: IEachRecord) => {
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
