import { HttpClient } from '@angular/common/http';
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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  LoginForm!: FormGroup;
  apiService: any;

constructor(private fb: FormBuilder, private http: HttpClient, private connectionService: ConnectionService,
    private router: Router) { }
  ngOnInit() {
      this.LoginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

   onSubmit() {
    if (this.LoginForm.valid) 
      console.log(this.LoginForm.value);
    return this.connectionService.postData<any>(
      "api/Login/Login",
      { "Username": this.LoginForm.value.Username, "Password": this.LoginForm.value.Password },
      environment.apiUrl
    ).subscribe(data => {
      
      if(data !== null)
      {
        const jsondata = JSON.stringify(data.token)
        localStorage.setItem('myData',jsondata);
        
        this.router. navigateByUrl('/dashboard'); 

        this.LoginForm.reset();
      }
      else  
      {
        alert("Something went wrong")
        this.LoginForm.reset();
      }
    }
   )
  }

  navigateToAdminPage() {
    this.router.navigate(['/admin']);[]
  }

  navigateToUserPage() {
    this.router.navigate(['/user']);
  }

  OnInit(): void {
    this.apiService.getUsers().subscribe((Login: FormGroup<any>) => {
    this.LoginForm = Login;
    
  });
  }
}
