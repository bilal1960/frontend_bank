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
export class TokenGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ): MaybeAsync<GuardResult> {
    const token = localStorage.getItem("token");
    if(!token){
      this.router.navigate(["login"]);
      return false;
    }
    const jwtHelper = new  JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);
    if(isTokenExpired){
      localStorage.clear();
      this.router.navigate(["login"])
      return false;
    }
    return true;
  }


}
