import { Component, OnInit } from '@angular/core';
import { QuizapiService } from '../quizapi.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-assignment',
  templateUrl: './take-assignment.component.html',
  styleUrls: ['./take-assignment.component.css']
})
export class TakeAssignmentComponent implements OnInit {

  question:any = {}
  quizList:any = [];
  constructor(private actRoute:ActivatedRoute,
              private auth:AuthenticationService,
              private router:Router,
              public api:QuizapiService
             ) { }

  ngOnInit(): void {
    var questionId = this.actRoute.snapshot.paramMap.get('questionId');
    console.log(questionId);
    this.api.getQuiz().subscribe(result => {
      this.quizList = result;
    })

    this.api.questionSelected.subscribe(question =>{
      this.question = question;
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

  goToQuizzes()
  {
    this.router.navigateByUrl('/all');
  }
}
