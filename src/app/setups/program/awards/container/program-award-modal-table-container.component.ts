import { Component, OnInit } from "@angular/core";
import { Award } from "../interface/award.interface";
import { AwardService } from "../service/award.service";

@Component({
    selector:'app-program-award-modal-table-container',
    templateUrl:'program-award-modal-table-container.component.html'
})
export class ProgramAwardModalTableContainerComponent implements OnInit{
    rows : Award[];
    columns = ['code','description'];

    constructor(private awardService : AwardService){}
    
    ngOnInit(): void {
       this.awardService.getAll().subscribe(data => this.rows = data);
       this.awardService.awardSubject.subscribe(data => this.rows = data);
    }


}