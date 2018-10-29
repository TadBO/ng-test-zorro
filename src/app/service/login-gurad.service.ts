import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { userModel } from '../model/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuradService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const path = route.routeConfig.path;
    const isLogin = userModel.isLogin;
    if (!isLogin) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
    if (path === 'login') {
      if (!isLogin) {
        return false;
      } else {
        this.router.navigate(['home']);
        return true;
      }
    }
  }
}
