import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SetupService } from "src/app/setups/setup.service";

@Component({
    selector:'app-vertical-nav',
    templateUrl:'vertical-navigation.component.html'
})
export class VerticalNavigationComponent{

    @Input() links :{route:string, desc:string}[];
}
