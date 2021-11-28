import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request:any,next:any)
  {
      var token = localStorage.getItem('token');
      var authReq = request.clone({
          headers : request.headers.set('Authorization',`Bearer ${token}`),
      })
      return next.handle(authReq);
  }

}
