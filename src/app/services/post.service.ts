import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASEURL = 'http://localhost:3000/api/chatup';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(body): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-post`, body);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${BASEURL}/posts`);
  }

  addLike(id): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-like`, id);
  }

 addComment(postId, comment): Observable<any> {
   return this.http.post(`${BASEURL}/post/add-comment`, {
     postId,
     comment
   });
 }
}
