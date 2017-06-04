import {NgModule} from "@angular/core";
import {MdSidenavModule, MdButtonModule, MdToolbarModule, MdCardModule, MdGridListModule} from "@angular/material";

@NgModule({
    imports : [
        MdGridListModule,
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule
    ],
    exports : [
        MdGridListModule,
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule
    ]
})
export class NgMaterialModule {

}