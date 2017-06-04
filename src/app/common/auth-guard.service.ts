/**
 * Created by Lahray on 6/4/2017.
 */


import {Injectable} from "@angular/core";
import {CanLoad, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private router : Router,
        private authenticationService : AuthenticationService
    ){

    }

    canLoad(){
            console.log("Authentication Guard at work");
        return new Promise((resolve, reject)=> {
            this.authenticationService.isLoggedIn()
                .then(() => {
                    console.log("Truth be told");
                    resolve(true);
                })
                .catch(() => {
                    console.log("Navigated");
                    this.router.navigate(['/login']);
                    reject(false);
                })
        });

    }
}