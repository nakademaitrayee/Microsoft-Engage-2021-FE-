import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {pipe} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public flag:boolean = false;
  public res :string = "right";
  public g : any = "ok";

  constructor(private httpservice:HttpClient,private route:Router) { }

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  registerUser(info:any)
  {
    this.httpservice.post<any>('https://localhost:44376/api/account',info,this.options)
                    .pipe(
                      catchError(err => {
                          
                          if(err.error.length==0)
                          {
                            alert("You have been Successfully Registered!");
                          }
                          else if(err.error[0]!=null && err.error[0].code=="DuplicateUserName")
                          {
                            this.route.navigateByUrl('/');
                            alert("This Username is Already taken, Please try another!");
                          }
                          else
                          {
                            this.route.navigateByUrl('/');
                            alert("Password should be atleast 6 characters long, it should consist of atleast one Capital letter, one Small letter, one Numeric character and one Special character. Please Try Again!");  
                          }
                         
                          return throwError(err);
                                        })
                        )
                    .subscribe(result => 
                      {
                          localStorage.setItem('token',result.tkn)
                      });
        
                      this.route.navigateByUrl('/login');
  }

  LoginUser(info:any)
  {
    this.httpservice.post<any>('https://localhost:44376/api/account/login',info,this.options)
                    .pipe(
                      catchError(err => {
                          if(err.error.length==0)
                          {
                            this.route.navigateByUrl('/navbar');
                          }
                          else
                          {
                            this.route.navigateByUrl('/login');
                            alert("Username/Password is Wrong! Please try Again.");
                          }
                          return throwError(err);
                                         })
                        )
                    .subscribe(result => 
                      { 
                        localStorage.setItem('token',result.tkn)
                      });
                      this.route.navigateByUrl('/navbar');
  }


    logout()
    {
      localStorage.removeItem('token');
      this.route.navigateByUrl('/login');
    }

}
