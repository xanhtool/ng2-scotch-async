import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import {Post} from '../../post';
import {GroupPosts} from '../../group-posts';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() data: Post[];

  groupPosts: GroupPosts[];

  constructor() { }

  ngOnInit() {
    this.groupPosts = this.groupByCategory(this.data);
  }

  ngOnChanges(changes: SimpleChanges){

  }

  groupByCategory(data: Post[]): GroupPosts[] {
    if (!data) return; // our logic to group the posts by category
    const categories = new Set(data.map(post => post.category)); // find out all the unique categories
     // produce a list of category with its posts
    const result = Array.from(categories).map(category => ({ // categories is Typeof Set, doesn't have map property, so we have to use Array.from()
      category,
      posts: data.filter(post=> post.category === category)
    }))
    return result;
  }

}
