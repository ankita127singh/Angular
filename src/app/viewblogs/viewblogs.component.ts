import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewblogs',
  templateUrl: './viewblogs.component.html',
  styleUrls: ['./viewblogs.component.css']
})
export class ViewblogsComponent implements OnInit {

  users:User[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(x=>this.users=x);
  }

  delete(id:number){
    console.log("Delete triggered!!!", id);
    this.users= this.users.filter(x=> x.id !== id);
    this.service.deleteById(id).subscribe(x=>console.log(x));
  }

}
