import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {



  constructor() { }

  getToken(): string {
     return localStorage.getItem(environment.jwt) ?? '';
  }
  setToken(token: string) {
    localStorage.setItem(environment.jwt, token);
  }
  getRefreshToken(): string {
    return localStorage.getItem(environment.refresh_token) ?? '';
  }
  setRefreshToken(refresh_token: string) {
    localStorage.setItem(environment.refresh_token, refresh_token);
  }

  getUserEmail() {
    return localStorage.getItem(environment.emailId) ?? '';
  }

  setUserEmail(email: string) {
    localStorage.setItem(environment.emailId, email);
  }
  clearTheStorage() {
    localStorage.clear();
  }







}
