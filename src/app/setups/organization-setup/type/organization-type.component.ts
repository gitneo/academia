import { Component, Input, OnInit, Output } from "@angular/core";
import { type } from "./type-interface/type.interface";
import { TypeService } from "./type-service/type.service";

@Component({
    selector:'app-org-type',
    templateUrl:'organization-type.component.html'
})
export class OrganizationTypeComponent implements OnInit{

    @Output() types :type[];
    @Output() typeDescription :string[] = ['code','title','description']

    constructor(private typeService :TypeService){}

    ngOnInit(): void {
        this.typeService.get().subscribe(types =>this.types = types);
    }
}