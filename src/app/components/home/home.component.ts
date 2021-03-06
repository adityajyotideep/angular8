

 import { Component, OnInit } from '@angular/core';
 import { RouterModule, Routes ,Router} from '@angular/router';

 // Components
 import { StudentListComponent } from '../student/list/student-list.component';
 import { StudentDetailsComponent } from '../student/details/student-details.component';
 import { StudentAddComponent } from '../student/add/student-add.component';
 import { TeacherComponent } from '../teachers/teacher/teacher.component';
 import { TeachrelistComponent } from '../teachers/teachrelist/teachrelist.component';
 // Services
 import { ToastrService } from 'ngx-toastr';

 @Component({
 	selector: 'app-home',
 	templateUrl: './home.component.html',
 	styleUrls: ['./home.component.css']
 })


 export class HomeComponent implements OnInit {
 	active:string;
 	constructor(private router: Router, private toastr:ToastrService) {
 		// Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
 			this.routeChanged(val);
 		});
 	}

 	ngOnInit() {
 	}

 	// Detect route changes for active sidebar menu
 	routeChanged(val){
 		this.active = val.url;
 	}

 	// Logout User
 	logOut(){
 		this.toastr.success('Success', "Logged Out Successfully");
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}
 }


 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
 {
 	path: '',
 	component: StudentListComponent
 },
 {
 	path: 'add',
 	component: StudentAddComponent
 },
 {
 	path: 'update/:id',
 	component: StudentAddComponent
 },
 {
 	path: 'detail/:id',
 	component: StudentDetailsComponent
 },
 {
	path: 'teacher_registration',
	component: TeacherComponent
},
{
	path: 'teacher_update/:id',
	component: TeacherComponent
},
{
	path: 'teacher_list',
	component: TeachrelistComponent
}
 ];

