import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {TokenService} from "../../shared/token.service";

@Injectable({providedIn:'root'})
export class AuthService {

  public $refreshToken= new Subject<boolean>

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  )
  {
    this.$refreshToken.subscribe((res:any)=>{
      this.getRefreshToken()
    })
  }

  onLogin(formData:FormGroup){
    const formValues = formData.value
    console.log(formValues)

    return this.http.post("https://freeapi.gerasim.in/api/JWT/login",formValues)

  }

  getRefreshToken(){
    const user = this.tokenService.getUserEmail();
    const token=this.tokenService.getToken()
    const refresh_token=this.tokenService.getRefreshToken()

    const refreshReq={
      emailId: user,
      token: token,
      refreshToken: refresh_token
    }
    console.log(refreshReq)

    return this.refresh(refreshReq)
  }

  refresh(body: any) {
    return this.http.post("https://freeapi.gerasim.in/api/JWT/refresh", body);
  }



}
