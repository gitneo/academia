import { Component, Input, OnInit } from "@angular/core";
import { type } from "../../setups/organization-setup/type/type-interface/type.interface";

@Component({
    selector:'app-table',
    templateUrl:'table.component.html'
})
export class TableComponent{
    @Input() rows :type[];
    @Input() columns :string[]
}