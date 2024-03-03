import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_CONSTANT } from '../constant/login.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient) { }

  postLogin(data: any) {
    return this.httpClient.post(`${LOGIN_CONSTANT.SIGN_IN}`, data);
  }
}
