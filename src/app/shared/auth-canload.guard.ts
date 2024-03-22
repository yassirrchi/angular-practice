import {CanActivateFn, CanLoad, GuardResult, MaybeAsync, Route, UrlSegment} from '@angular/router';
import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthCanloadGuard implements CanLoad{
  constructor(private tokenService:TokenService) {
  }
  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {



    return false;

  }
}
