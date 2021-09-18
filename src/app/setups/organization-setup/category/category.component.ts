import { Component, OnInit, Output } from "@angular/core";
import { category } from "./category-interface/category.interface";
import { CategoryService } from "./category-service/category.service";

@Component({
    selector:'app-org-category',
    templateUrl:'category.component.html'
})
export class CategoryComponent implements OnInit{
    @Output() categories :category[];
    @Output() categoryDescription :string[] = ['code','title','description']

    constructor(private categoryService : CategoryService){}
    ngOnInit(): void {
        this.categoryService.get().subscribe(data =>this.categories = data);
    }
}