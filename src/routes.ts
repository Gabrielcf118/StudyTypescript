import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "nodeJS",
    educator: "Gabriel",
    duration: 10,
  });
  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Gabriel",
  });

  return response.send();
}
