import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;
  constructor(private http: HttpClient,private form: FormBuilder,private successpg:Router,private failpg:Router,private encrypt:Router)
   { }
  ngOnInit(){
  this.loginForm = this.form.group({
    name: ['', [Validators.required] ],
    password: ['',[Validators.required]],
 });
  }
  title = 'Login Form';
  nam:any={};
  pwd:any={};
  detail:any=[];
  name="";
  c:number;
  i:number;
  array:any="";
  array1:any="";
  password:any;
  encryptedData:any=[];
onSubmit(details){
  this.http.post('http://localhost:7000/login',details,{
    responseType: 'text',
  })
  .subscribe((res)=>{
    this.array=res;
    console.log(this.array)
  if(this.array!="Invalid Credentials")
  this.successpg.navigate(["userdetails"]);
else
  this.failpg.navigate(["fail"]);  
  }, error => {
    console.log(error);
  });
  
}
enSubmit(details){
  this.http.post('http://localhost:7000/loginencrypt',details,{
    responseType: 'text',
  })
  .subscribe((res)=>{
    this.array=res;
    console.log(this.array)
  if(this.array!="Invalid Credentials"){
  this.encryptedData=prompt("Encrypted Data:",this.array)
 console.log(this.encryptedData)
 
}
else
  this.failpg.navigate(["fail"]);  
  }, error => {
    console.log(error);
  });
  
}
deSubmit(endata){
  if (endata.length!=0){
this.http.post('http://localhost:7000/logindecrypt',endata,{
  responseType: 'text',
})
 .subscribe((res)=>{
  this.array1=res;
  console.log(this.array1)
prompt("Decrypted Data:",this.array1) 
}, error => {
  console.log(error);
});
  }else{
    alert("Encrypt the data")
  }
}
}
//   onSubmit(details) {
//     console.log(details)
//     this.http.get('http://localhost:7000/list')
//     .subscribe((res) => {
//       this.detail= res;
     
   
//       this.c=0;
//     for(this. i=0;this.i<this.detail[0].length;this.i++){
//       for(this. i=0;this.i<this.detail.length;this.i++){
//      if((details.name==this.detail[0][this.i].Name)&&(details.password==this.detail[0][this.i].Password))
//     if((details.name==this.detail[this.i].Name)&&(details.password==this.detail[this.i].Password))
//     {
//       this.c=1;
//       break;
//     }}
 
//   console.log(this.c)
//     if(this.c==1){
//       this.successpg.navigate(["userdetails"]);
//     }
//     else{
//       this.failpg.navigate(["fail"]);
//     }
//   }, error => {
//     console.log(error);
//    });
//   }

// }
// details = [
  //   {
  //     id:1,
  //     name:"Alice",
  //     password:"Alice"
  //   },
  //   {
  //     id:2,
  //     name:"Bob",
  //     password:"Bob"
  //   },
  //   {
  //     id:3,
  //     name:"Been",
  //     password:"Been"
  //   },
  //   {
  //     id:4,
  //     name:"Jack",
  //     password:"Jack"
  //   },
  //   {
  //     id:5,
  //     name:"Jill",
  //     password:"Jill"
  //   }
  // ];
  // getList(){
 
  //   this.http.get('http://localhost:7000')
  //   .subscribe((res) => {
  //     this.details = res;
  //   }, error => {
  //     console.log(error);
  //   });
  // }



