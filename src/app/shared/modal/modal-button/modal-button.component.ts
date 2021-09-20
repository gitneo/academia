import { Component, OnInit, Output } from "@angular/core";
import { ModalService } from "../modal-service/modal.service";

@Component({
    selector:'app-modal-buttons',
    templateUrl:'modal-button.component.html'
})
export class ModalButtonComponent{
    buttonAction :string;

    constructor(private modalService :ModalService){}

    setAction(action :string){
        this.modalService.buttonEventEmitter.next(action);
    }
}