import express, { application, response } from 'express';
import { createCourse } from './routes';

const app = express();
app.get('/', createCourse);
app.listen(5555);