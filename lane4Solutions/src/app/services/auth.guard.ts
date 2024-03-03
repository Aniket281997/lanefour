import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private mainservice: MainService, private router: Router) {}
  canActivate() {
    // if (this.mainservice.islogin()) {
    //   return true;
    // } else {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
  
}
