import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){

  CreateCourseService.execute({
    name: "Node.js",
    duration: 10,
    educator: "Ricardo"
  });

  CreateCourseService.execute({
    name: "Node.js",
    educator: "Benilda",
  });
  return response.send();

}