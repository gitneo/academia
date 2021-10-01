import { Component, Input, OnInit } from "@angular/core";
import { category } from "src/app/setups/organization-setup/category/category-interface/category.interface";
import { TableService } from "./table.service";

@Component({
    selector:'app-table',
    templateUrl:'table.component.html'
})
export class TableComponent{
    @Input() rows :any[];
    @Input() columns :string[]

    constructor(private tableService : TableService){}

    get(row: any){
        this.tableService.tableEventEmitter.next(row);
    }
}