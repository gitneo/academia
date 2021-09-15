import { Component, OnInit, Output } from "@angular/core";
import { CategoryService } from "./service/category.service";

@Component({
    selector:'app-org-category',
    templateUrl:'category.component.html'
})
export class CategoryComponent implements OnInit{
    @Output() categories: any;

    constructor(private categoryService : CategoryService){}
    ngOnInit(): void {
        this.categories = this.categoryService.get().subscribe(data=>this.categories =data);
    }
}