import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent},
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "client",
    loadChildren: () => import("./client/client.module").then(m => m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
