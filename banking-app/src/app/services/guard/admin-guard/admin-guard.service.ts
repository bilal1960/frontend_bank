import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      if (token != null) {
        // @ts-ignore
        const decodedToken = helper.decodeToken(token);
        if (decodedToken.authorities[0].authority !== "ROLE_ADMIN"){
           this.router.navigate(["access-denied"]);
           return false;
        }
        return true;
      }
    }
    return false;
  }
}
