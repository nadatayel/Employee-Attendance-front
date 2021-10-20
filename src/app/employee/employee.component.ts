import { Component, OnInit } from '@angular/core';
import { Employee } from './../model/Employee';
import { EmployesService } from './../api/services/employes.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 // employe:Employee[];
 
   lists:any=[];
  p !: number;
  emplist:any=new Employee(0,"","",0);
  constructor( private service : EmployesService,private router: Router) {
    
   }
   
   attendform = new FormGroup({

    Attendance: new FormControl(),
    Leaving: new FormControl()
  })
   
   ngOnInit(): void {
     this.service.getemployees().subscribe(
       a =>this.emplist=a,
       
       );
      }
      
        DeletebyId(id: number){
          if( confirm("Are You Sure?")){
        this.service.deleteemployee(id).subscribe(
         a=> this.router.navigate(['/']),
        e=>console.log(e)
       )}
       location.reload
     }
      
      
}
