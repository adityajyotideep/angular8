

 import { Component, OnInit } from '@angular/core';

 // Services
 import { StudentService } from '../../../services/student/student.service';
 import { ToastrService } from 'ngx-toastr';
 @Component({
 	selector: 'app-student-list',
 	templateUrl: './student-list.component.html',
 	styleUrls: ['./student-list.component.css']
 })

 export class StudentListComponent implements OnInit {
 	studentList:any;
	 studentListData:any;
	 studentDelete:any;
	 p:number = 1;
 	constructor(private studentService:StudentService,private toastr:ToastrService) { }
 	// Call student list function on page load 
 	ngOnInit() {
 		this.getStudentList();
 	}
               
 	// Get student list from services
 	getStudentList(){
		 this.studentList = this.studentService.getStudents()
		 .subscribe(this._successGet, this._errorGet)
 	}
	 _successGet = (res) => {
	   this.studentListData = res;
	   for (var i = 0; i < this.studentListData.length; i++) {
		this.studentListData[i].name = this.studentListData[i].first_name +' '+ this.studentListData[i].last_name;
	}
   }
   _errorGet = (err) => {
	this.toastr.error( "Something went wrong!!");
   }


   
 	// Delete a student with its index
 	deleteStudent(index:any){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure?");
 		if (r == true) {
			 this.studentDelete = this.studentService.deleteStudent(index)
			 .subscribe(this._successDel,this._errorGet);
 			// if(studentDelete) {
 			// 	this.toastr.success("Success", "Student Deleted");
 			// }
 			
 		}
	 }
	 _successDel = (res) => {
		this.getStudentList();
		this.toastr.success( "Student Deleted successfully");
	 }
 }
