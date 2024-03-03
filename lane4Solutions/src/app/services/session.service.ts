import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  setAuthtoken(token: any): void {
    localStorage.setItem('AUTH_TOKEN', token);
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
