import { Subject } from "rxjs";
import { TPost } from "types/Types";

export class PostS{

private posts:Array<TPost>=[];

private postUpdated=new Subject<TPost[]>()

addPosts(post:TPost):void{
this.posts.push(post);
this.postUpdated.next([...this.posts]);
}

getPosts():Array<TPost>{
return [...this.posts]
}

subscribePosts(){
return this.postUpdated.asObservable();
}




}
