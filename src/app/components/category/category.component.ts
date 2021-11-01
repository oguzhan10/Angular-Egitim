import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/models/category";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  dataLoaded: boolean = false;
  currentCategory: Category = { categoryId: 0, categoryName: "" };
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory(event: Category) {
    this.currentCategory = event;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllCategoryClass() {
    if (this.currentCategory.categoryId === 0) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
}
