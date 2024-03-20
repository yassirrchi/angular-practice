import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './components/test/test.component';
import {AuthService} from "./services/auth.service";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    TestComponent
  ],
  exports: [
    LoginComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
