import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.page.html',
  styleUrls: ['./random-recipe.page.scss'],
})
export class RandomRecipePage implements OnInit {
  public response: any;
  
  constructor( private http:HttpClient) { }
  
  ngOnInit() {
    let random = "https://www.themealdb.com/api/json/v1/1/random.php"
    let dataObject = this.http.get(random);
    console.log(random);
    console.log(dataObject);
    this.http
    .get(random)
    .subscribe((response:any) => {
      console.log(response);
      console.log(response.meals[0].strMeal);
      this.response = response;
  });
  
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }
}
