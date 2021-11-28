import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() public childEventforward = new EventEmitter();
  constructor(private auth:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }


  createSurvey()
  {
    this.router.navigateByUrl('/createsurvey');
  }

  takeSurvey()
  {
    this.router.navigateByUrl('/takesurvey');
  }

  logout()
  {
    this.auth.logout();
  }
}
