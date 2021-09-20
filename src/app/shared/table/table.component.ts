import { Component, Input, OnInit } from "@angular/core";
import { category } from "src/app/setups/organization-setup/category/category-interface/category.interface";
import { type } from "../../setups/organization-setup/type/type-interface/type.interface";
import { TableService } from "./table.service";

@Component({
    selector:'app-table',
    templateUrl:'table.component.html'
})
export class TableComponent{
    @Input() rows :type[];
    @Input() columns :string[]

    constructor(private tableService : TableService){}

    get(category: category){
        console.log(`selected category is ${category.id}`)
        this.tableService.tableEventEmitter.next(category);
    }
}