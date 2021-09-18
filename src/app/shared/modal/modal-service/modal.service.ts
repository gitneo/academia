import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ModalService{

    buttonEventEmitter = new EventEmitter();

}