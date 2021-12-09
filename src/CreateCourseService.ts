interface course {
  name: string;
  educator: string;
  duration?: number; //Adicionar por opção 
}
class CreateCourseService {
  //Adicionar por default
  execute({name, duration = 4, educator}:course){
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();