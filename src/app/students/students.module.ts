import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailsComponent, StudentEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "students", component: StudentsListComponent, children: [
          { path: ":id", component: StudentDetailsComponent },
          { path: ":id/edit", component: StudentEditComponent }
        ]
      }
    ])
  ],
  providers: [StudentService]
})
export class StudentsModule { }


//localhost:4200/students
//localhost:4200/students/3
//localhost:4200/students/3/edit