/*
name - string
duration - number 
educator - string
*/

interface Course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute(data: Course) {
    console.log(data);
  }
}
export default new CreateCourseService();
