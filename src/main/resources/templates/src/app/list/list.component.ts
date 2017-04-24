import { employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers :[EmployeeService]

})
export class ListComponent implements OnInit {
  private employeeList;

  constructor(private employeeService : EmployeeService, private router: Router) {
   }

  ngOnInit() {
    this.employeeList=this.employeeService.getEmployeeList();
  }

  deleteEmployee(employee){
      this.employeeService.deleteEmployee(employee);
  }

  update(employee){
    this.router.navigate(['EditEmployee',{id :employee.id}]);

  }
}
