import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { getUserRoleFromToken } from "./JwtToken";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        
    debugger;
    const userRole = getUserRoleFromToken(); 

    if (userRole === 'Admin') 
    {
        return true; 
    }
    alert("User cannot access Admin")
    return false; 
  }
}
