import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {TokenService} from "./token.service";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private tokenService:TokenService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log("------")

    console.log(this.tokenService.getRefreshToken())
    if(this.tokenService.getRefreshToken())
      console.log(this.tokenService.getRefreshToken()=="")

    console.log("------")

    return this.tokenService.getRefreshToken()!="";

  }

}
