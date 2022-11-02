import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  builder: any;
  constructor() { }

  ngOnInit(): void {
    
    

    this.registerForm = this.builder.group({
      //id: ['', Validators.required],
      name: [''],
      email: [''],
      message: ['']
    })
  }
  onSubmit() {
    alert("Contacted!!")
  }

}
