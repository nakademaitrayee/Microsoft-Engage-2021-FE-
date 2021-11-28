import { Component, OnInit } from '@angular/core';
import {QuizapiService} from '../quizapi.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  question:any={};
  questionId:any={};
  quizList:any = [];
  pollList:any = [];
  percentageCorrect:any = {};

  constructor(private actRoute:ActivatedRoute,
    private auth:AuthenticationService,
    private router:Router,
    public api:QuizapiService
   ) { }

  ngOnInit(): void {
    this.questionId = this.actRoute.snapshot.paramMap.get('questionId');
    console.log(this.questionId);
    this.api.getQuizById(this.questionId).subscribe(result => {
      this.quizList = result;

      var q = this.quizList[0];
      this.percentageCorrect = (100)*q.c1/(q.w1+q.w2+q.w3+q.c1);
      this.percentageCorrect = this.percentageCorrect.toFixed(2);
    })
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
