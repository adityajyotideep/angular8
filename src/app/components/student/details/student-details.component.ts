 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';

 // Services
 import { StudentService } from '../../../services/student/student.service';

 @Component({
 	selector: 'app-student-details',
 	templateUrl: './student-details.component.html',
 	styleUrls: ['./student-details.component.css'],
 })

 export class StudentDetailsComponent implements OnInit {
 	index:any;
	 studentDetail:any;
	 gtstudentDetail:any;
 	constructor(private router: Router, private route: ActivatedRoute, private studentService:StudentService) { 
 		// Get user detail index number sent in params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getStudentDetails(this.index);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Get student details 
 	getStudentDetails(index:number){
		 console.log(index);
		this.gtstudentDetail = this.studentService.getDetails(index)
		 .subscribe(this._successCB, this._errCB);
 		
	 }
	 
	 _successCB = (res) => {
		 console.log(res[0]);
		this.studentDetail = res[0];
	 }
	 _errCB = (err) => {
		console.log(err);
	 }

 }
