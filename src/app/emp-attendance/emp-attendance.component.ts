import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmpAttVm } from '../api/models';
import { EmployesService } from './../api/services/employes.service';
import { Employee } from './../model/Employee';

@Component({
  selector: 'app-emp-attendance',
  templateUrl: './emp-attendance.component.html',
  styleUrls: ['./emp-attendance.component.scss']
})
export class EmpAttendanceComponent implements OnInit {
  id: any;
  item: Employee | any;

  empAttendence: EmpAttVm | undefined;
  
  attendform = new FormGroup({

    attendance: new FormControl(),
    leaving: new FormControl()
  })


  constructor(private service: EmployesService,private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }



  createAttend() {
    console.log( this.attendform.value)
    const ob = {

      attendance: this.attendform.value.Attendance,
      leaving: this.attendform.value.Leaving,
      empId: this.id

    }
    this.service.createattendance(ob).subscribe(
      a => this.router.navigate(['/']),

    )
  }

  GetById(id: string) {
    this.service.getemployeeById(id).subscribe(
    );
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.getattendance(this.id).subscribe(
         a => {
          

            this.attendform.value.attendance =a.attendance ,
           this.attendform.value.leaving =a.leaving,
           console.log( this.attendform.value)

          
          })       
      },
      e => console.log(e)
      );
    
  
  }};


