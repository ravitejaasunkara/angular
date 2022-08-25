import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  uname = '';
  pword = '';
  valid :boolean = true;
  userform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  get f(){
    return this.userform.controls;
  }
  onSubmit(){
    console.log(this.userform.value);
    if(this.uname == 'raviteja' && this.pword == 'Error123@'){
      this.valid = true;
    }
    else{
      this.valid = false;
    }
  }
}
