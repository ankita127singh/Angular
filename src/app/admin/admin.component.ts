import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public adminForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.adminForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  admin(){
    this.http.get<any>("http://localhost:3000/admins")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.adminForm.value.email && a.password === this.adminForm.value.password
      });
      if(user){
        alert("Authentication Success!!");
        this.adminForm.reset();
        this.router.navigate(['list'])
      }else{
        alert("User not found!!")
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }

}
