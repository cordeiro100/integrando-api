import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/models/photos';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

photos: any = []
  constructor(private photosService: PhotosService) { 
}


 
  
  ngOnInit(): void {
  }

loadPhotos(){
  this.photosService.listFromUser('flavio').subscribe(photos => this.photos = photos)
}

}
