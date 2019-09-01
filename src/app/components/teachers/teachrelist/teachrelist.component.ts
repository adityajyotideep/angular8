import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher/teacher.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-teachrelist',
  templateUrl: './teachrelist.component.html',
  styleUrls: ['./teachrelist.component.css']
})
export class TeachrelistComponent implements OnInit {
  teacherList:any;
  listSubscribe:any;
  constructor( private theacherService:TeacherService, private toaster:ToastrService) { }

  ngOnInit() {
    this.getTeacherList()
  }
   getTeacherList(){
     this.listSubscribe = this.theacherService.getTeacherList()
     .subscribe(res => {
       if(res != null){
         this.teacherList = res;
         for (var i = 0; i < this.teacherList.length; i++) {
          this.teacherList[i].name = this.teacherList[i].first_name +' '+ this.teacherList[i].last_name;
        }
       }else{
        this.toaster.error('Something went wrong!!');
       }
     })
   }
}
