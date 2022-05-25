import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../models/photos';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

 API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

getPhotos(userName: string){
  this.http.get<Object[]>(this.API + '/flavio/photos')
}

}
