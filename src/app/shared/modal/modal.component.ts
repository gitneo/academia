import { Component, OnInit, Output } from "@angular/core";
import { ModalService } from "./modal-service/modal.service";

@Component({
    selector:'app-modal',
    templateUrl:'modal.component.html'
})
export class ModalComponent implements OnInit{
    title :string;
    @Output() buttonAction :string

    constructor(private modalService: ModalService){}

    ngOnInit(): void {
       this.modalService.buttonEventEmitter.subscribe(action=>{this.buttonAction = action})
    }

}