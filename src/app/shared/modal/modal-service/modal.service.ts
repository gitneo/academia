import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class ModalService{

    buttonEventEmitter = new Subject<string>();

}