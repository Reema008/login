import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { AppService } from '../app.service';
import * as moment from 'moment';
@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  myDate1=moment().format('YYYY-MM-DD')
arr:any=[]
  title = 'Make Changes...';
  array:any=[];
  b:number;
  j:number;
  birth:any;
  join:any;
  // c:number=-1;
  private today = new Date();
  public dateOfBirth: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy.mm.dd',
    // dateFormat: 'dd.mm.yyyy',
    disableUntil: {year: 1960, month: 1, day: 1},
    disableSince: {year: 2000, month: 1, day: 1}
};
public dateOfJoining: IMyDpOptions = {
  // other options...
  dateFormat: 'yyyy.mm.dd',
  // dateFormat: 'dd.mm.yyyy',
  disableUntil: {year: 1980, month: 1, day: 1},
  disableSince: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate()+1}
};



  disabled=false;
  ShowFilter=false;
  limitSelection=false;
  states:any=[];
  selectedItems:any=[];
  selectedState:any;
  dropdownSettings:any={};


angForm;
  constructor(private http: HttpClient,private form: FormBuilder,private logform:Router, public service : AppService) {
   
  }

  ngOnInit(){
      
    this.angForm = this.form.group({
       name: ['', [Validators.required,Validators.minLength(4)] ],
       dob: ['', [Validators.required] ],
       email: ['', [Validators.required,Validators.email]],
       num: ['',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
       password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
       abtu: ['',[Validators.required]],
       states: [this.selectedState],
       gender: ['', [Validators.required]],
       dpmid: ['',[Validators.required,Validators.pattern("[0-8]{1}")]],
       doj: ['', [Validators.required] ],
       accept: ['', [Validators.requiredTrue]]
    });

    
    this.angForm.patchValue(
      {name:this.service.data1.Name,
        dob:this.service.data1.Date_of_Birth,
        email:this.service.data1.eMail,
        num:this.service.data1.Contact,
        password:this.service.data1.Password,
        abtu:this.service.data1.About_You,
        states:this.service.data1.State,
        gender:this.service.data1.Gender,
        dpmid:this.service.data1.DepartmentsId
      
    }); 
    this.states=[{item_id:1,item_text:'Kerala'},
    {item_id:2,item_text:'Andhra Pradesh'},
    {item_id:3,item_text:'Telangana'},
    {item_id:4,item_text:'Tamil Nadu'},
    {item_id:5,item_text:'Karnataka'},
    {item_id:6,item_text:'Goa'},
    {item_id:7,item_text:'Jammu and Kashmir'},
    {item_id:8,item_text:'Orissa'}];

   

    this.dropdownSettings={
      singleSelection:false,
      idField:'item_id',
      textField:'item_text',
      selectAllText:'SelectAll',
      unSelectAllText:'UnSelectAll',
      itemsShowLimit:2,
      allowSearchFiter:this.ShowFilter
    };
  }
    // @Output() edata =new EventEmitter();
    onSubmit(data) {
      console.log(this.angForm.value)
      // this.array.push((this.angForm.value))
      // this.array=this.angForm.value;
      // this.http.post('http://localhost:7000/edit',data)
      // .subscribe((res: Request) => {
      //   this.array=res;
      // }, error => {
      //   console.log(error);
      // });
      data['dob']=moment(data.dob.formatted).format('YYYY-MM-DD');
      data['doj']=moment(data.doj.formatted).format('YYYY-MM-DD');
      data['states']=this.selectedState;
      console.log(data);
      this.service.update(data,this.service.data1.Id) .subscribe((res: Request) => {
        this.array=res;
        console.log(data['dob'],data['doj'])
        this.birth=data['dob'][0]+data['dob'][1]+data['dob'][2]+data['dob'][3]
        this.join=data['doj'][0]+data['doj'][1]+data['doj'][2]+data['doj'][3]
        console.log(Number(this.birth),Number(this.join))
        this.b=Number(this.birth)
        this.j=Number(this.join)
        console.log(this.b,this.j)
        console.log(this.j+20)
        if(this.j-this.b>=18)
        this.logform.navigate(["userdetails"]);
        else
        alert("Joining Date must be atleast 18 years greater than the Date of Birth")
      }, error => {
        console.log(error);
      });
      console.log(data)
      
      // this.endata.navigate(["data"]);
      // this.edata.emit(this.angForm.value.name);
     this.angForm.reset()
    }
   
    onItemSelect(item:any){
      console.log(item.item_text)
      this.selectedItems.push(item.item_text);
  
      this.selectedState=this.selectedItems.toString();
     // this.selectedItems= _.pluck(item,'item_text');
        console.log(this.selectedItems);
        console.log(this.selectedState);
    }
    onSelectAll(item:any){
      console.log('onSelectAll',item)
    }

}


