import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.page.html',
  styleUrls: ['./recipe-view.page.scss'],
})
export class RecipeViewPage implements OnInit {
  public response: any;
  constructor(private http:HttpClient, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let dataGet = this.activeRoute.snapshot.paramMap.get('id');
    console.log(dataGet);
    let blankURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    let targetURL= blankURL+dataGet;
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
        this.response = response;
      }
  });
  }
  }


