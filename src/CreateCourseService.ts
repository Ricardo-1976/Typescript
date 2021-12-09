interface course {
  name: string;
  educator?: string;
  duration: number;
}
class CreateCourseService {
  execute({name, duration, educator}:course){
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();