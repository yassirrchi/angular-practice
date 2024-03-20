import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../shared/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm=new FormGroup({
    EmailId: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });

  constructor(private auth:AuthService,private router:Router,private tokenService:TokenService) {
  }
  login(){

    this.auth.onLogin(this.loginForm).subscribe({
      next: (res: any)=> {
        if (res) {
          this.tokenService.setUserEmail(res.data.emailId)
          this.tokenService.setToken(res.data.token)
          this.tokenService.setRefreshToken(res.data.refreshToken)
          this.router.navigate(["/client"])
        }
      },
      error: error => console.log(error)
    })

  }

}
