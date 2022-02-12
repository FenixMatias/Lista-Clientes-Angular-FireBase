import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.services';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginService: LoginService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(this.loginService.isAuntenticado()){
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;
        }
    }
}