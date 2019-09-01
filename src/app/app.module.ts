import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

// material


// end
//Modules

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Services

import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';
// Pipes

import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';
import { TeacherComponent } from './components/teachers/teacher/teacher.component';
import { TeachrelistComponent } from './components/teachers/teachrelist/teachrelist.component';


// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
	declarations: [
	AppComponent,
	StudentListComponent,
	StudentDetailsComponent,
	StudentAddComponent,
	LoginComponent,
	HomeComponent,
	FilterPipe,
	PhonePipe,
	HighlightStudentDirective,
	TeacherComponent,
	TeachrelistComponent
	],
	imports: [
		MatIconModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatSlideToggleModule,
		MatTabsModule,
		MatButtonModule, 
		MatCheckboxModule,
	NgxPaginationModule,
	BrowserAnimationsModule, 
    ToastrModule.forRoot(),
	BrowserModule,
	HttpClientModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	],
	providers: [AuthService,UserService,StudentService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
