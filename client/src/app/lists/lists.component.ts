import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {TPost} from '../../../types/Types'
import { PostS } from '../core/services/posts.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit, OnDestroy {


  public subscriberRef:Subscription
  public posts:Array<TPost>=[];


  constructor(public postService:PostS) { }



  ngOnInit(): void {
  this.postService.getPosts();
  this.subscriberRef=this.postService.subscribePosts().subscribe((value:Array<TPost>)=>{
    this.posts=value;
  });
  }

  ngOnDestroy(){
    this.subscriberRef.unsubscribe();
  }
}
