import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/models/photos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

photos: Photos[] = []

  constructor(httpClient: HttpClient) { 
    httpClient.get<Photos[]>('http://localhost:3000/flavio/photos').subscribe(photos =>{
      this.photos = photos
    })
  }


 
  
  ngOnInit(): void {
  }

}
