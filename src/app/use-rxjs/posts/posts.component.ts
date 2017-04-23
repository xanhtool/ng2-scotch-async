import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import {Post} from '../../post';
import {GroupPosts} from '../../group-posts';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/takewhile';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {
  // initialize a private variable _data, it's a BehaviorSubject
   private _data = new BehaviorSubject<Post[]>([]);

  @Input()
  set data(value) {
       // set the latest value for _data BehaviorSubject
       this._data.next(value);
   }

   get data() {
       // get the latest value from _data BehaviorSubject
       return this._data.getValue();
   }

  groupPosts: GroupPosts[];

  constructor() { }

  ngOnInit() {
    // now we can subscribe to it, whenever input changes,
       // we will run our grouping logic
       this._data
           .takeWhile(() => !this.groupPosts) // Unsubscribe once groupPosts has value
           // . There are other ways to unsubscribe automatically as well, e.g take, take Util, but that's beyond this topic.
           .subscribe(x => {
               this.groupPosts = this.groupByCategory(this.data);
           });
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
