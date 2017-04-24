import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  providers :[EmployeeService]
})
export class AddComponent implements OnInit {

  private employeeList;
  Employee :any;


  ngOnInit() {
  }
   employeeForm :FormGroup;

  constructor(fb: FormBuilder, private employeeService :EmployeeService,private router : Router){
     this.employeeList=[];
    this.employeeForm = fb.group({
     'id' :[],
      'firstname' : [null, Validators.required],
      'lastname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone' : [null, Validators.required]

      });

     this.employeeForm.valueChanges.subscribe( (form: any) => {
      });
  }

  submitForm(employeeForm){
    this.employeeService.addEmployee(employeeForm);
    this.router.navigate(['/']);
  }
}
