
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';

 // Services
 import { ValidationService } from '../../../services/config/config.service';
 import { StudentService } from '../../../services/student/student.service';
 import { ToastrService } from 'ngx-toastr';

 @Component({
 	selector: 'app-student-add',
 	templateUrl: './student-add.component.html',
 	styleUrls: ['./student-add.component.css']
 })

 export class StudentAddComponent implements OnInit {
 	// create studentAddForm of type FormGroup 
	 private studentAddForm : FormGroup;
	 private studentDetails:any;
 	index:any;

 	constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private studentService:StudentService,private toastr:ToastrService) { 

 		// Check for route params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			// check if ID exists in route & call update or add methods accordingly
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getStudentDetails(this.index);
 			}else{
 				this.createForm(null);
 			}
 		});
 	}

 	ngOnInit() {
		 console.log(this.route);
 	}

 	// Submit student details form
 	doRegister(){
 		if (this.index && this.index != null && this.index != undefined) {
 			this.studentAddForm.value.id = this.index
 		}else{
 			this.index = null;
		 }
		 if(this.index){
			this.studentService.updateStudent(this.studentAddForm.value)
		 .subscribe(this._successUpCB, this._errorCB);
		 }else{
			this.studentService.addStudent(this.studentAddForm.value)
		 .subscribe(this._successCB, this._errorCB);
		 }
 	}
     _successCB = (res) => {
		console.log(res);
		this.toastr.success("Successfully inserted!!");
		this.router.navigate(['/']);
	 }
	 _successUpCB = (res) => {
		console.log(res);
		this.toastr.success("Successfully updated!!");
		this.router.navigate(['/']);
	 }
	 _errorCB = (err) => {
		 console.log(err);
		 this.toastr.error("Something went wrong!!");
	 }
 	// If this is update form, get user details and update form
 	getStudentDetails(index:number){
		 this.studentDetails = this.studentService.getDetails(index)
		 .subscribe(this._sCB, this._errorCB)
 		
	 }
	 
	 _sCB = (res) => {
		 let sDetails = res[0];
		this.createForm(sDetails);
	 }

 	// If this is update request then auto fill form
 	createForm(data){
		 console.log(data);
 		if (data == null) {
 			this.studentAddForm = this.formBuilder.group({
 				first_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				last_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: ['',  [Validators.required, ValidationService.emailValidator]]
 			});			
 		}else{
 			this.studentAddForm = this.formBuilder.group({
 				first_name: [data.first_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				last_name: [data.last_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: [data.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: [data.email,  [Validators.required, ValidationService.emailValidator]]
 			});
 		}
 	}

 }

