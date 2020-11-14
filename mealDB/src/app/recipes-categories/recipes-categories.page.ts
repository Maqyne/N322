import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';
import {RecipesListPage} from '../recipes-list/recipes-list.page'

@Component({
  selector: 'app-recipes-categories',
  templateUrl: './recipes-categories.page.html',
  styleUrls: ['./recipes-categories.page.scss'],
})
export class RecipesCategoriesPage implements OnInit {
  public response: any;
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
    let region = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    let dataObject = this.http.get(region);
    console.log(region);
    console.log(dataObject);
    this.http
    .get(region)
    .subscribe((response:any) => {
      console.log(response);
      console.log(response.meals[0].strMeal);
      this.response = response.meals;

  });
  }
  clicked(meal) {
    this.router.navigate(['recipes-list', "category", meal.strCategory ]);
  }
}
