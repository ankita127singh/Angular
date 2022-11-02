import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from './admin.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl:string="http://localhost:3000/admins";
  constructor(private http:HttpClient) { }
  getAllAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.baseUrl);
  }
  // getUserById(id:number):Observable<Admin>{
  //   return this.http.get<Admin>(this.baseUrl+"/"+id);
  // }
  // addUser(user:Admin){
  //   return this.http.post(this.baseUrl,user);
  // }
  // deleteById(id:number){
  //   return this.http.delete(this.baseUrl+"/"+id);
  // }
  // updateUser(user:Admin,id:number){
    
  //   return this.http.put(this.baseUrl+"/"+id,user);
  // }
}
