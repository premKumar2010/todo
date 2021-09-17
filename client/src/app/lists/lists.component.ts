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
  public posts:Array<TPost>=[];
  private subscribeRef: Subscription;



  constructor(private postService:PostS) { }



  ngOnInit(): void {
this.posts=this.postService.getPosts();
this.subscribeRef=this.postService.subscribePosts().subscribe((value:Array<TPost>)=>{
  this.posts=value;
})
  }

ngOnDestroy(){
this.subscribeRef.unsubscribe();
}



}
