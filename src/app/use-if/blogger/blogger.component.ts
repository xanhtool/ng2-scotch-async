import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import {BlogService} from '../../blog.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  blogger = 'Hiepxanh';
  posts: Post[];

  constructor(
    private blogService : BlogService
  ) { }

  ngOnInit() {
    this.blogService.getPostsByBlogger().subscribe(posts => this.posts = posts)
  }



}
