import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './home/home.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {tokenInterceptor} from "./shared/token.interceptor";
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HideIfNotAdminDirective } from './shared/directives/hide-if-not-admin.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HideIfNotAdminDirective
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

