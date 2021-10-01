import { Component, Input } from "@angular/core";

@Component({
    selector:'app-sidebar-layout',
    templateUrl:'sidebar-layout.component.html'
})
export class sidebarLayoutComponent{

    @Input() links : {route:string,desc:string}[]
}