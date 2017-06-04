/**
 * Created by Lahray on 6/4/2017.
 */

import {Injectable} from "@angular/core";
@Injectable()
export class AuthenticationService {

    constructor(){

    }

    public isLoggedIn() : Promise<boolean>{
        return new Promise((resolve, reject) => {
            reject(false);
        })
    }
}