import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.formInitialization();
    
  }

  formInitialization(): void {
    this.signInForm = this.formBuilder.group({
      username: ['',
      Validators.compose([Validators.required,])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
    });
  }
  
  get signInVal() {
    return this.signInForm.controls;
  }

  onSignIn(): void {
    this.router.navigate(['/dashboard']);
    if (this.signInForm.valid) {
      this.loginService.postLogin(this.signInForm.value).subscribe(
        (res: any) => {
          this.sessionService.setAuthtoken(res);
        },
        (err: any) => {
          console.log('login error',err)
        }
      );
    }
  }
  
}
