import { Component, signal } from '@angular/core';
import { SessionService } from '../session.service';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  error : string = '';

  constructor(private sessionService: SessionService, 
              private authService: AuthentificationService,
              private router: Router,
              private fb: FormBuilder) { }

  LoginForm = this.fb.group({
    email: ['emmanuelboucicaut@gmail.com',[
      Validators.required,
      Validators.email,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]],
    password: ['masterkey', [
      Validators.required,
      Validators.minLength(6)
    ]],
    remember: ['',[

    ]],
  });

  async signIn() : Promise<any> {
    if(this.LoginForm.valid){
      const { email, password } = this.LoginForm.value;

      const userData = {
        email: email || '',
        password: password || ''
      }

      this.authService.singInUser(userData)
      .subscribe({
        next: (response: any) => {
          if(response && response.token){
            this.sessionService.updateUserSession(response);
            this.router.navigate(['./administration']).then(() => {
              window.location.reload();
              this.LoginForm.reset();
            })
          }
        },
        error: (error) => {
          this.error = error.error.message;
        }
      });
    }
  }

  get emailGetter() {
    return this.LoginForm.get('email');
  }

  get password() {
    return this.LoginForm.get('password');
  }
}
