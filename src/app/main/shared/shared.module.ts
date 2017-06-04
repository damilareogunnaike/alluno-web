/**
 * Created by Lahray on 6/4/2017.
 */


import {NgMaterialModule} from "../ngmaterial/ngmaterial.module";
import {NgModule} from "@angular/core";
@NgModule({
    imports : [
        NgMaterialModule,
    ],
    exports : [
        NgMaterialModule
    ]
})
export class SharedModule {

}