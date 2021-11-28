import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any={};

  constructor(private route:Router,private auth:AuthenticationService,private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
 }

  ngOnInit(): void {
  }

  login(form:any)
  {
    form.value = JSON.stringify(form.value);
    this.auth.LoginUser(form.value);
  }
}
