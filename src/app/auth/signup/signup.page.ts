import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router,
    private authService: AuthService,
    ) { }

  passwordType = 'password';
  passwordIcon = 'eye-off';

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public signup(email: any, password: any, mobile: any) {
    this.authService.signup(email, password,mobile)
      .subscribe((resData) => {
        console.log('resData', resData);
        this.router.navigateByUrl('/');
      },
        errRes => {
          console.log("errREs ",errRes);
          const code = errRes.error.error.message;
          let message = 'Could not sign you up, please try again.';
          if (code) {
            message = code;
          }
          this.showAlert(message);
        });
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    const email = this.form.value.email;
    const password = this.form.value.password;
    const mobile = this.form.value.mobile;
    this.signup(email, password,mobile);
  }

  private showAlert(alertMessage: string) {
    this.alertCtrl
      .create({
        header: 'Opps! Something\'s wrong!',
        message: alertMessage,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

  public hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
