import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
     return this.http.get("https://freeapi.gerasim.in/api/JWT/GetAllUsers")
  }
}
