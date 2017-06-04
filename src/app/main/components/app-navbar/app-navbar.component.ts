import {Component, Input} from "@angular/core";
import {MdSidenav} from "@angular/material";
/**
 * Created by Lahray on 6/4/2017.
 */

@Component({
    selector : 'app-navbar',
    templateUrl: 'app-navbar.component.html'
})
export class AppNavbarComponent {

    @Input()
    sideNav : MdSidenav;

}
