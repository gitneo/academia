import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class sharedService{
    buttonEventEmitter = new Subject<string>();
}