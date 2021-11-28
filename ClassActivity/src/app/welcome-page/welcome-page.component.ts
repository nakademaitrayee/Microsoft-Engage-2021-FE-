import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {QuizapiService} from '../quizapi.service';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit {

  question:any = {};
  questionId:any={};
  quizList:any = [];
  ans:any={};
  answers:any=[];
  submittedAnswer:any={};
  ansValue:any={};

  constructor(private actRoute:ActivatedRoute,
              private auth:AuthenticationService,
              private router:Router,
              public api:QuizapiService
             ) { }

  ngOnInit(): void {
    this.questionId = this.actRoute.snapshot.paramMap.get('questionId');

    console.log(this.question);
    console.log(this.questionId)

    this.api.getQuizById(this.questionId).subscribe(result => {
      this.quizList = result;

      var q = this.quizList[0];
      q.answers = [q.correctAnswer,q.wrongAnswer1,q.wrongAnswer2,q.wrongAnswer3];
      this.shuffle(q.answers);
      console.log(q);
      console.log(q.answers);  
    });
  }

  isValid():boolean
  {
    let q = this.quizList[0];

    if(q.submittedAnswer!=q.correctAnswer && q.submittedAnswer!=q.wrongAnswer1 &&
        q.submittedAnswer!=q.wrongAnswer2 && q.submittedAnswer!=q.wrongAnswer3)
        {
          return false;
        }

      return true;
  }

  finishQuiz()
  {
    let q = this.quizList[0];
    
      if(q.submittedAnswer==q.correctAnswer)
      {
        alert("Congratulations, Your Answer is Correct!");
        q.c1++;
      }
      else if(q.submittedAnswer==q.wrongAnswer1)
      {
        alert("Sorry, Your Answer is Wrong!");
        q.w1++;
      }
      else if(q.submittedAnswer==q.wrongAnswer2)
      {
        alert("Sorry, Your Answer is Wrong!");
        q.w2++;
      }
      else if(q.submittedAnswer==q.wrongAnswer3)
      {
        alert("Sorry, Your Answer is Wrong!");
        q.w3++;
      }

    this.api.putAnswer(q);
    this.router.navigateByUrl(`/result/${this.questionId}`);
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

  goToQuizzes()
  {
    this.router.navigateByUrl('/all');
  }

  shuffle(a:any)
  {
    for(let i=a.length;i;i--)
    {
      let j = Math.floor(Math.random() * i);
      [a[i-1],a[j]] = [a[j],a[i-1]];
    }
  }

}
