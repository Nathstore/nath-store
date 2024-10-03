import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from './session.service';
import { Session } from '../interfaces/session';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private  apiUrl : string  = environment.apiUrl+'/users';
  private tokenKey = 'auth_token';

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }


  signupUser(userData: any): Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/signup`, userData);
  }

  singInUser(credentials: {email: string, password: string}): Observable<any> {

    return this.httpClient.post<any>(`${this.apiUrl}/login`, credentials)
    .pipe(
      tap((response: any) => {
        if(response && response.token){
          this.storeToken(response.token);

          const session :  Session = {
              fullname: response.data.user.fullName,
              role:response.data.user.role,
              token: response.token
            }
          this.sessionService.updateUserSession(session);
        }
      })
    );
  }

  private storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() : string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean{
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
