import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css']
})
export class ReadblogComponent implements OnInit {
  users:User[];
  id:number;
  constructor(private route: ActivatedRoute,
    private router: Router,private service:UserService) {
      
    }

    
  

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params); 
        this.id = params['id']-1;
        console.log(this.id); 
        console.log("kfkasdlfkljashfaklfhasfhhfklasklfhjashfklhaslhdflkas", this.users[this.id].name);
      }
    );
    this.service.getAllUsers().subscribe(x=>this.users=x);
  }
}
