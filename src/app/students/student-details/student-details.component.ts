import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {

  student: Student = new Student();
  constructor(private ss: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(paramList => {
      this.student = this.ss.GetStudentDetails(+paramList["id"]);
    });
  }

  Edit() {
    this.router.navigate([this.student.StudentId, "edit"], { relativeTo: this.route.parent });
  }

}
