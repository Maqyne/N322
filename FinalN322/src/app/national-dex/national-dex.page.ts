import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-national-dex',
  templateUrl: './national-dex.page.html',
  styleUrls: ['./national-dex.page.scss'],
})
export class NationalDexPage implements OnInit {
public response :any;
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
    let dex = "https://pokeapi.co/api/v2/pokemon?limit=151";
    let dataObject = this.http.get(dex);
    console.log(dex);
    console.log(dataObject);
    this.http
    .get(dex)
    .subscribe((response:any) => {
      console.log(response);
      console.log(response.results[0].name);
      this.response = response.results;

  });

  }

}
