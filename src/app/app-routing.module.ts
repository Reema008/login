import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { FormComponent } from './form/form.component';
import { PasswordComponent } from './password/password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FailComponent } from './fail/fail.component';
import { DataComponent } from './data/data.component';
import { EditformComponent } from './editform/editform.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent ,
    data: { title: 'Login Form' }
  },
  {
    path: 'success',
    component: SuccessComponent ,
    data: { title: 'Login Successful' }
  },
  {
    path: 'fail',
    component: FailComponent ,
    data: { title: 'Login UnSuccessful' }
  },
  {
    path: 'form',
    component: FormComponent ,
    data: { title: 'Registration Form' }
  },
  {
    path: 'setpassword',
    component: PasswordComponent ,
    data: { title: 'Password Validations' }
  },

  {
    path: 'termsandconditions',
    component: TermsAndConditionsComponent,
    data: { title: 'Terms and Conditions' }
  },
  {
    path: 'employee_departments',
    component: EmployeeDepartmentComponent,
    data: { title: 'Departments List' }
  },
  {
    path: 'userdetails',
    component: DataComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'editform',
    component: EditformComponent ,
    data: { title: 'Registration Form' }
  },
  {
    path: 'security',
    component: SecurityComponent ,
    data: { title: 'Registration Form' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
