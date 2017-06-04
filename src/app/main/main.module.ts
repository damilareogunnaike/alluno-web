/**
 * Created by Lahray on 6/4/2017.
 */

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import {SharedModule} from "./shared/shared.module";
import {AppNavbarComponent} from "./components/app-navbar/app-navbar.component";
import {AppSidenavComponent} from "./components/app-sidenav/app-sidenav.component";

const routes : Routes = [
    {
        path : '',
        component: MainComponent,
        children : [
        ]
    }
];

@NgModule({
    declarations : [
        AppNavbarComponent,
        AppSidenavComponent,
        MainComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports : [

    ],
    providers : [
    ],
    entryComponents: [

    ]
})
export class MainModule{

}