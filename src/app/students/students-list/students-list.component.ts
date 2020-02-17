import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../students/student.service';
import { Student } from '../../students/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styles: []
})
export class StudentsListComponent implements OnInit {

  students: Student[];

  constructor(private ss: StudentService) { }

  ngOnInit() {
    this.students = this.ss.GetStudents();
  }

}
