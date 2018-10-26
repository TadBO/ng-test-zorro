import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginGuradService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const path = route.routeConfig.path;
    const isLogin = userModel.isLogin;
    if (!isLogin) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
    if (path === 'login') {
      if (!isLogin) {
        return true;
      } else {
        this.router.navigate(['home']);
        return false;
      }
    }
  }
}
