import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/Employee';
import { EmployesService } from './../api/services/employes.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss']
})
export class CreateEmpComponent implements OnInit {

  constructor(private service:EmployesService, private router: Router) { }

  ngOnInit(): void {
  }
  Createemoloye(){
    console.log("eee")
    this.service.createemployee(this.CreateForm.value).subscribe(
     a=> this.router.navigate(['/']),
      e=> console.log(e)
    )
  }
  CreateForm= new FormGroup({
    Name: new FormControl(),
    Age: new FormControl(),
    Address: new FormControl(),
    PhoneNumber: new FormControl()
  })
  
}
