import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SimpleFormComponent } from './simpleformcomponent';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SimpleFormComponent,
    ListComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
   { path :'',component : ListComponent},
   { path :'NewEmployee',component : AddComponent},
   { path :'UpdateEmpoyee',component : ListComponent},
   { path :'EditEmployee',component : UpdateComponent},
   { path :'UpdateEmployee/:id',component : UpdateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
