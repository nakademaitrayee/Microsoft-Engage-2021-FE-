import { Component, OnInit } from '@angular/core';
import { QuizapiService } from '../quizapi.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})

export class CreateAssignmentComponent implements OnInit {

  question:any = {}

  constructor(private auth:AuthenticationService,private router:Router,private api:QuizapiService) { }

  ngOnInit(): void {
  }

  isValid():boolean
  {
    if(this.question.text!=null && this.question.correctAnswer!=null && this.question.wrongAnswer1!=null &&
        this.question.wrongAnswer2!=null && this.question.wrongAnswer3!=null)
        {
          return true;
        }
      
      return false;
  }
  
  post(question : any)
  {
    question = JSON.stringify(question);
    this.api.postQuiz(question);
    alert("You have Posted a New Quiz! Head Over to Take Survey, to take it!");
  }

  takeSurvey()
  {
    this.router.navigateByUrl('/takesurvey');
  }

  createSurvey()
  {
    this.router.navigateByUrl('/createsurvey');
  }

  logout()
  {
    this.auth.logout();
  }

}
