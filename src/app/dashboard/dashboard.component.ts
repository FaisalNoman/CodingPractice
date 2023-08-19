import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../Services/Connectionservice';
import { AuthGuard } from '../Extensions/Authguard';
import { getUserRoleFromToken } from "../Extensions/JwtToken";
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isInitialized: boolean = false;
  

  constructor(private http: HttpClient, private connectionService: ConnectionService,
    private router: Router) { }
  ngOnInit() {
    //debugger;
    const userRole = getUserRoleFromToken(); 

    if (userRole === 'Admin') 
    {
        this.isInitialized= true; 
    }
    
  }

  navigateToAdminPage() {
    this.router.navigate(['/admin']);
  }

  navigateToUserPage() {
    this.router.navigate(['/user']);
  }

  
}
