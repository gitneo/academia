import { Component, Input } from "@angular/core";

@Component({
    selector:'app-modal-table',
    templateUrl:'modal-table.component.html'
})
export class ModalTableComponent{
    @Input() rows :any[];
    @Input() columns :string[];
}