import { Request, Response } from "express";
import Course from "../models/course.model";
import Learner from "../models/learner.model";
import { ILearner } from "../interfaces/learner.interface";

export const getCourses = (req: Request, res: Response) => {
    Course.find()
        .populate("learners")
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err).status(500);
        });
};

export const createCourse = (req: Request, res: Response) => {
    const { name } = req.body;
    Course.create({ name: name })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err).status(500);
        });
};

export const createLearner = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const create: ILearner = await Learner.create({ name: name });
        res.json(create);
    } catch (error) {
        res.json(error).status(500);
    }
};

export const addLearner = async (req: Request, res: Response) => {
    const { learner, courseId } = req.body;
    try {
        const add = await Course.updateOne(
            { _id: courseId },
            {
                $push: {
                    learners: learner,
                },
            }
        );
        res.json(add);

        const updateIdLearner = await Learner.updateOne(
            { _id: learner },
            {
                $push: {
                    courses: courseId,
                },
            }
        );
    } catch (error) {
        res.json(error).status(500);
    }
};
