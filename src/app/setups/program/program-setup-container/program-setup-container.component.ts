import { Component } from "@angular/core";

@Component({
    selector:'app-program-setup-container',
    templateUrl:'program-setup-container.component.html'
})
export class ProgramSetupContainerComponent{
    title = "Program Setup"
    links = [
        {route:'types'   ,desc:'Types'},
        {route:'awards'  ,desc:'Awards'},
        {route:'programs',desc:'Programs'}
    ]
}