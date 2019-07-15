import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { HttpClientModule } from '@angular/common/http';
import { FailComponent } from './fail/fail.component';
import { DataComponent } from './data/data.component';
import { EditformComponent } from './editform/editform.component';
import { MyDatePickerModule } from 'mydatepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { SecurityComponent } from './security/security.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    FormComponent,
    PasswordComponent,
    TermsAndConditionsComponent,
    FailComponent,
    DataComponent,
    EditformComponent,
    EmployeeDepartmentComponent,
    SecurityComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
