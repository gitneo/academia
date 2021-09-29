import { Component, Input, Output } from "@angular/core";

@Component({
    selector:'app-sidebar-layout',
    templateUrl:'sidebar-layout.component.html'
})
export class SidebarLayoutComponent{

    @Output() navLinks = [
        {route:'types',desc:'Types'},
        {route:'awards',desc:'Award'},
        {route:'programs',desc:'Program'},
    ]
    
}