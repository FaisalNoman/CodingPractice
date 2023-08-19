import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/Environments/environment';
import { Login } from 'src/app/Models/Login.Model';
import { ConnectionService } from 'src/app/Services/Connectionservice';
import { AuthGuard } from 'src/app/Extensions/Authguard';
import jwt_decode from 'jwt-decode';
import { getUserRoleFromToken } from 'src/app/Extensions/JwtToken'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  template: `
  <div *ngFor="let user of data">{{ user.username },{ user.userPassword },{ user.userRoleId }}</div>
`,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  apiService: any;
  getdata:any;
  data: any[] = [];
  pagedData: any[] = [];
  pageSize = 10; 
  currentPage = 0; 
  totalRecords = 0; 
  searchText: string = '';


  constructor( private http: HttpClient, private connectionService: ConnectionService,
    private router: Router) { }
    
    ngOnInit() {
      this.getData();
      // debugger;
      // let auth_token = localStorage.getItem('myData')
      
      // const headers = {
      //        Authorization: `Bearer ${auth_token}`
      //     };
      //   debugger
      //   return this.http.get<any>('https://localhost:7178/api/User/GetAllRecords' ,{ headers })
    }
  
    getData() {
      this.connectionService.getAdminData('api/User/GetAllRecords', environment.apiUrl)
        .subscribe((res: any[]) => {
          this.data = res;
          debugger;
          this.totalRecords = this.data.length;
          this.updatePagedData();
        });
    }
    
    applyFilter() {
      const filteredData = this.data.filter(user =>
        user.username.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.totalRecords = filteredData.length;
      this.pagedData = filteredData.slice(
        this.currentPage * this.pageSize,
        (this.currentPage + 1) * this.pageSize
      );
    }

    updatePagedData() {
      debugger;
      const startIndex = this.currentPage * this.pageSize;
      this.pagedData = this.data.slice(startIndex, startIndex + this.pageSize);
      return this.pagedData;
    }
  
    pageChanged(event: any) {
      debugger;
      this.currentPage = event.pageIndex;
      this.updatePagedData();
    }
  
    navigateToLoginPage() {
      this.router.navigate(['/Login']);
    }
  
    navigateToUserPage() {
      this.router.navigate(['/user']);
    }
    
}
