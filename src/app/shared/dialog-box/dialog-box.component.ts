import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector:'app-dialog-box',
    templateUrl:'dialog-box.component.html'
})
export class DialogBoxComponent{
    @Input() dialogForm :FormGroup;
}