
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
 selector: 'app-form',
   templateUrl: './form.component.html'

})
export class FormComponent {
  employeeForm : FormGroup;

  constructor(fb: FormBuilder){
    this.employeeForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'address' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone' : [null, Validators.required]
         
    //  'lastName': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      //'gender' : [null, Validators.required],
     // 'hiking' : [false],
      //'running' : [false],
      //'swimming' : [false]
    })
    console.log(this.employeeForm);
    this.employeeForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
    }
    );
  }

  submitForm(value: any){
    console.log(value);
  }
}
