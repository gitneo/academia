import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { sharedService } from "../shared.service";

@Component({
    selector:'app-group-buttons',
    templateUrl:'group-buttons.component.html'
})
export class GroupButtonsComponent{

    constructor(private emitter: sharedService){}
    
    setAction(action: string){
        this.emitter.buttonEventEmitter.next(action);
    }
}