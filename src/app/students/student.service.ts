import { Injectable } from '@angular/core';
import { Student, students } from './student.model';

@Injectable()
export class StudentService {

  private students:Student[]=students;
  constructor() { }

  GetStudents(){
    return this.students;
  }

  GetStudentDetails(id:number){
    return this.students.find(m=>m.StudentId==id);
  }

}




