import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {RecipeViewPage} from '../recipe-view/recipe-view.page'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {
  public response: any;
  
  constructor(private http:HttpClient,private router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let dataGetType = this.activeRoute.snapshot.paramMap.get('type');
    let dataGetID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(dataGetType);
    console.log(dataGetID);
    let blankURL = "";
    if (dataGetType == "category") {
       blankURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
    } else {
       blankURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a="
    }
      
   

   
    let targetURL= blankURL+dataGetID;
    let dataObject = this.http.get(targetURL);
    console.log(targetURL);
    console.log(dataObject);
    this.http
    .get(targetURL)
    .subscribe((response:any) => {
      console.log(response);
      console.log(response.meals[0].strMeal);
      console.log(response.meals);
      if (response){
        this.response = response.meals;
      }
  });
  }
clicked(meal){
  this.router.navigate(['recipe-view', meal.idMeal ]);
}

}
