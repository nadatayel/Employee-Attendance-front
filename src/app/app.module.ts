import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpAttendanceComponent,
    CreateEmpComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://localhost:44341/'}),
     RouterModule.forRoot([ 
       
     ]),
     AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
