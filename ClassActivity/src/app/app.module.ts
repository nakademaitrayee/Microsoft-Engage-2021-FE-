import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuizapiService } from '../app/quizapi.service';
import { AuthenticationService } from './authentication.service';
import {AuthInterceptor} from './auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { TakeAssignmentComponent } from './take-assignment/take-assignment.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TakeAllComponent } from './take-all/take-all.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    CreateAssignmentComponent,
    TakeAssignmentComponent,
    RegisterComponent,
    LoginComponent,
    TakeAllComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    MatButtonModule,MatFormFieldModule,
    MatCardModule,MatInputModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,MatListModule,
    MatRadioModule,
    AppRoutingModule
  ],
  providers: [QuizapiService,AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
