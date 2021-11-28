import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:any={};

  constructor(private route:Router,private auth:AuthenticationService,private formBuilder:FormBuilder) {
      this.form = formBuilder.group({
        email : ['',Validators.required],
        password : ['',Validators.required]
      })
   }

  ngOnInit(): void {
  }


  register(form:any)
  {
    form.value = JSON.stringify(form.value);
    this.auth.registerUser(form.value);
  }

  login()
  {
    this.route.navigateByUrl('/login');
  }
}
