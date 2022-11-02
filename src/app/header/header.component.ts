import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users:User[];
  searchInput:any="";
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(x=>this.users=x);
  }

}
