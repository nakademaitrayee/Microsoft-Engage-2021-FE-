import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { TakeAllComponent } from './take-all/take-all.component';
import { TakeAssignmentComponent } from './take-assignment/take-assignment.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path:'createsurvey', component: CreateAssignmentComponent},
  { path:'takesurvey', component: TakeAssignmentComponent},
  { path:'takesurvey/:questionId', component: TakeAssignmentComponent},
  { path:'navbar', component: NavbarComponent},
  { path:'login',component:LoginComponent},
  { path:'all',component:TakeAllComponent},
  { path:'all/:questionId',component:TakeAllComponent},
  { path:'play/:questionId',component:WelcomePageComponent},
  { path:'result/:questionId', component:ResultComponent},
  { path:'',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
