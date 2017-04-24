import { employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router,Params,ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  providers :[EmployeeService]
})
export class UpdateComponent implements OnInit {

  employeeList: any[];
  employeeForm : FormGroup;
  emp: employee;
  private sub;
  private id: number;

  constructor(fb: FormBuilder, private employeeService :EmployeeService,private router : Router,private route :ActivatedRoute){

      this.sub=this.route.params.subscribe(params=> {
      this.id=params['id']-1;
      this.emp=employeeService.getEmployee(this.id);
    });

     this.employeeList=employeeService.getEmployeeList();

    this.employeeForm = fb.group({
      'id' : [this.emp.id],
      'firstname' : [this.emp.firstname, Validators.required,],
      'lastname' : [this.emp.lastname, Validators.required],
      'email' : [this.emp.email, Validators.required],
      'phone' : [this.emp.phone, Validators.required]
      });
   this.employeeForm.valueChanges.subscribe( (form: any) => {  } );
  }

  ngOnInit() {
  }

   submitForm(employeeForm){
    this.employeeService. updateEmployee(employeeForm);
    this.router.navigate(['/']);
  }



}
