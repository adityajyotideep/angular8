import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';

// services
 import { ValidationService } from '../../../services/config/config.service';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherAddForm:FormGroup;
  index:any;
  detailsSubscribe:any;
  constructor(private formBuilder: FormBuilder,private teacherService:TeacherService, private _toaster:ToastrService, private router:Router, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.index = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.index && this.index != null && this.index != undefined) {
        this.getTeacherDetails(this.index);
      }else{
        this.createForm(null);
      }
    });
  }
  
  ngOnInit() {

  }
  getTeacherDetails(id){
    this.detailsSubscribe = this.teacherService.getTeacherDetails(id)
    .subscribe(res=>{
      let resDetails = res[0];
      this.createForm(resDetails);
    })
  }
  doRegister(){
    if (this.index && this.index != null && this.index != undefined) {
      this.teacherAddForm.value.id = this.index;
      this.teacherService.updateTeacher(this.teacherAddForm.value)
    .subscribe(this._successCBUP, this._errorCB);
    }else{
      this.teacherService.addTeacher(this.teacherAddForm.value)
    .subscribe(this._successCB, this._errorCB);
    }
     
  }
  _successCB = (res) =>{
    this._toaster.success("Inserted Successfully!!");
    this.router.navigate(['/teacher_list']);
  } 
  _successCBUP = (res) =>{
    console.log(res);
    this._toaster.success("Updated Successfully!!");
    this.router.navigate(['/teacher_list']);
  } 
  _errorCB = (err) => {
    console.log(err);
    this._toaster.error("Something went wrong!!");
  }
  createForm(data){
    console.log(data);
if(data == null){
  this.teacherAddForm = this.formBuilder.group({
    first_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
    last_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
    phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
    email: ['',  [Validators.required, ValidationService.emailValidator]],
    subject: ['', Validators.required],
    date_of_joining: ['',  Validators.required],
    password: ['',  [Validators.required, ValidationService.passwordValidator]]
  });			
}else{
  this.teacherAddForm = this.formBuilder.group({
    first_name: [data.first_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
    last_name: [data.last_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
    phone: [data.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
    email: [data.mail,  [Validators.required, ValidationService.emailValidator]],
    subject: [data.subject, Validators.required],
    date_of_joining: [data.joining_date,  Validators.required],
    password: [data.password,  [Validators.required, ValidationService.passwordValidator]]
  });
}
}

    
}
