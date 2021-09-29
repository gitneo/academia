import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)
export class SetupService{
    setupSubject = new Subject<{route:string, desc:string}[]>();
}