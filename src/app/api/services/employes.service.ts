/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { EmpAttVm } from '../models/emp-att-vm';
import { Employe } from '../models/employe';
import { EmployePagedData } from '../models/employe-paged-data';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EmployesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  private readonly api="https://localhost:44341/api/";
  getemployees(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.api + 'Employes')
  }
  getemployeeById( id: string): Observable<any> {
    return this.http.get(this.api+`Employes/${id}`)
   ;
  }
 

  deleteemployee(id: number) : Observable<any>{
   
    return this.http.delete<any>(this.api+'Employes/'+id)
     
    
  }

createemployee(body:any): Observable<any>{
  console.log("rrrrrrrr");
return this.http.post<any>(this.api +'Employes',body)
}
createattendance(body:any): Observable<any>{
  
  const headers  = new Headers();
   headers.append('Content-Type', 'application/json');
   const options = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
} 
  return this.http.post<any>(this.api + 'EmployeeAttend/employeAttendance',body, options)
  }

 getattendance(id:number): Observable<any> {
    return this.http.get<any>(this.api + `EmployeeAttend?Emp_Id=${id}`)
    
  }

}