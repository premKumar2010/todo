import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TPost } from "types/Types";


@Injectable()
export class PostS{


  constructor(private httpClient:HttpClient){

  }

private posts:Array<TPost>=[];

private postUpdated=new Subject<TPost[]>()

addPosts(post:TPost):void{
this.posts.push(post);
this.postUpdated.next([...this.posts]);
}

 getPosts(){
    this.httpClient.get('http://localhost:3000/api/posts').subscribe((values:any)=>{
      console.log('values', values);
this.posts=values;
this.postUpdated.next([...this.posts]);
});
}

subscribePosts(){
return this.postUpdated.asObservable();
}




}
