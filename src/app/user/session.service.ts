import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userSessionSource = new BehaviorSubject<Session | null>(null);
  currentUserSession = this.userSessionSource.asObservable();

  constructor() {
    const savedSession = this.getUserSessionFromLocalStorage();
    if (savedSession) {
      this.userSessionSource.next(savedSession);
    }
   }


  updateUserSession(sessionData: Session){
    this.userSessionSource.next(sessionData);
  }
  // Mettre à jour la session

  // Sauvegarder dans localStorage
  saveUserSessionToLocalStorage(sessionData: Session) {
    localStorage.setItem('userSession', JSON.stringify(sessionData));
  }

  // Récupérer la session depuis le localStorage
  getUserSessionFromLocalStorage(): Session | null {
    const sessionData = localStorage.getItem('userSession');
    return sessionData ? JSON.parse(sessionData) as Session : null;
  }

  // Récupérer uniquement le token
  getToken(): string | null {
    const sessionData = this.getUserSessionFromLocalStorage();
    return sessionData ? sessionData.token : null;
  }

  // Effacer la session
  clearUserSession() {
    localStorage.removeItem('userSession');
    this.userSessionSource.next(null);
  }
}
