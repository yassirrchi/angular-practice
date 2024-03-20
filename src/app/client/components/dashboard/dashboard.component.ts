import { Component } from '@angular/core';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  clients!:any
  constructor(private clientService:ClientService) {
    this.getAllUsers()
  }
  getAllUsers(){
    this.clientService.getAllUsers().subscribe(
      (data:any) => {
         this.clients=data.data
      },
      error => {

      }
    );
  }


}
