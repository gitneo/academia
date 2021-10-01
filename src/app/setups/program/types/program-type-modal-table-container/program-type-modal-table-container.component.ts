import { Component, OnInit, Output } from "@angular/core";
import { share } from "rxjs/operators";
import { ProgramType } from "../interface/program-type.interface";
import { ProgramTypeService } from "../service/program-type.service";

@Component({
    selector:'app-program-type-modal-table-container',
    templateUrl: 'program-type-modal-table-container.component.html'
})
export class ProgramTypeModalTableContainerComponent implements OnInit{
    @Output() rows : ProgramType[];
    @Output() columns = ['id','title','description'];

    constructor(private programTypeService : ProgramTypeService){}

    ngOnInit(): void {
        this.programTypeService.getAll().subscribe(data => this.rows = data);
    }

     
}