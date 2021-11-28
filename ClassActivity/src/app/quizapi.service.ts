import { Injectable, QueryList } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private httpservice:HttpClient) { }

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  putAnswer(ques:any)
  {
    this.httpservice.put(`https://localhost:44376/api/quiz/${ques.id}`,ques,this.options).subscribe(result => {
      console.log(result);
    });
  }

  postQuiz(ques:any)
  {
    this.httpservice.post('https://localhost:44376/api/quiz',ques,this.options).subscribe(result => {
      console.log(result);
    });
  }

  getQuiz()
  {
    return this.httpservice.get('https://localhost:44376/api/quiz');
  }

  getQuizById(questionId:any)
  {
    return this.httpservice.get(`https://localhost:44376/api/quiz/${questionId}`);
  }

  getAllQuizzes()
  {
    return this.httpservice.get('https://localhost:44376/api/quiz/all');
  }

  selectQuestion(question:any)
  {
    this.selectedQuestion.next(question);
  }
}
