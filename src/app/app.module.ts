import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./common/auth-guard.service";
import {AuthenticationService} from "./common/authentication.service";
import {NgMaterialModule} from "./main/ngmaterial/ngmaterial.module";

const routes : Routes = [
    {path: 'app', loadChildren: './main/main.module#MainModule', canLoad : [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', loadChildren: './main/main.module#MainModule', canLoad : [AuthGuard]}
];


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        HttpModule,
        NgMaterialModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

