import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { category } from "src/app/setups/organization-setup/category/category-interface/category.interface";

@Injectable({providedIn:'root'})
export class TableService{
    tableEventEmitter = new Subject<any>();
}