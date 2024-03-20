import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './home/home.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {tokenInterceptor} from "./shared/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }

