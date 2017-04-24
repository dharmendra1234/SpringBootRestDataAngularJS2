import { employee } from './employee';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class EmployeeService {

  employee: any;
  id: number;

  employeeList = EMPLOYEES;


  constructor(private http: Http) { }



  getEmployeeList() {
   return this.employeeList;
   
     return this.http.get('http://localhost:9088/customersList/')
      .map(res => res.json());
  }

  getEmployee(id) {
    return this.employeeList[id];
  }

  addEmployee(form) {
    this.employee = form;
    this.id = this.employeeList.length;
    this.employee.id = this.id + 1;
    this.employeeList.push(this.employee);
  }

  updateEmployee(employeeForm) {
    this.employeeList[employeeForm.id - 1] = employeeForm;
  }
  
  deleteEmployee(employee){
    this.employeeList.splice(this.employeeList.indexOf(employee),1);
  }

}

const EMPLOYEES: employee[] = [
  { id: 1, firstname: 'dharmendra', lastname: 'pawar', email: 'dharmendra.pawar@gmail.com', phone: '4708093327',name:'test',city:'trst',country:'test' ,address:'tet'},
  { id: 2, firstname: 'dharmendra123213', lastname: 'pawar', email: 'dharmendra.pawar@gmail.com', phone: '4708093327' ,name :'rtrt',city:'jjj',country:'jjj',address:'test'}
];