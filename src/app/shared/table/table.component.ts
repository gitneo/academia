import { Component, Input, OnInit } from "@angular/core";
import { type } from "../../setups/organization-setup/type/interfaces/type.interface";

@Component({
    selector:'app-table',
    templateUrl:'table.component.html'
})
export class TableComponent{
    @Input() rows :type[];
    @Input() columns :string[]
}