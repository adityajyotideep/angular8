import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor( private _http:HttpClient) { }

  addTeacher(obj:any){
    return this._http.post('http://localhost:8080/add_teacher', obj)
  }
  updateTeacher(obj:any){
    return this._http.post('http://localhost:8080/add_teacher', obj)
  }
  getTeacherList(){
    return this._http.get('http://localhost:8080/fetch_teacher');
  }
  getTeacherDetails(key){
    return this._http.get('http://localhost:8080/t_details', {
      params: { id: key }
  })
  }
}
