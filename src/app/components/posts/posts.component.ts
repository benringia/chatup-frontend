import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];


  constructor(private postService: PostService) {}

  ngOnInit() {
    this.AllPosts();
  }

  AllPosts() {
    this.postService.getAllPosts().subscribe(data => {
     this.posts = data.posts;
    });
  }

}
