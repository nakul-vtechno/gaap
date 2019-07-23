import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  public login(email: string, password: string) {
    this.authService.login(email, password)
    .subscribe((resData) => {
      console.log('resData', resData);
      this.router.navigateByUrl('/menu/dashboard');
    },
    errRes => {
      console.log('errRes :::' , errRes);
      const code = errRes.error.error.message;
      let message = 'Could not sign you up, please try again.';
      if (code === 'EMAIL_EXISTS') {
        message = 'This email address exists already!';
      } else if (code === 'EMAIL_NOT_FOUND') {
        message = 'E-Mail address could not be found.';
      } else if (code === 'INVALID_PASSWORD') {
        message = 'This password is not correct.';
      }
      this.showAlert(message);
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.login(email, password);
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

}
