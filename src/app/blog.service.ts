import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(
    private http: Http
  ) { }

  // it should be in a service but we short it here
  getPostsByBlogger() {
    const url = '../../assets/mock-posts.json'
    return this.http.get(url).map(res => res.json())
  }

}
