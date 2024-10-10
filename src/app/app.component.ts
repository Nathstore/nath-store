import { Component, OnInit } from '@angular/core';
import { SessionService } from './user/session.service';
import { Session } from './interfaces/session';
import { IdleService } from './service/idle.service';
import { AuthentificationService } from './user/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nath-store';
  hidden = false;
  login = 'Login';
  cartQuantity : Number = 1;

  isLogging : boolean = false;
  role : string | undefined = "";

  userSession: Session | null = null;

  constructor(
      private sessionService: SessionService, 
      private idleService: IdleService,
      private authService: AuthentificationService){}
  ngOnInit(): void {
    
    this.sessionService.currentUserSession.subscribe(session => {
      if(session){
        this.userSession = session
        
        this.login = this.userSession.fullname
      }
      this.isLogging = this.authService.isAuthenticated();
      this.role = this.userSession?.role;
    })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
