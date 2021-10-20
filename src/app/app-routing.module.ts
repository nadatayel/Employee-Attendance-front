import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'createAttend', component: CreateEmpComponent},
       {path:'attendance/:id', component: EmpAttendanceComponent },
       { path:'**' , component: EmployeeComponent}


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})

export class AppRoutingModule { }
