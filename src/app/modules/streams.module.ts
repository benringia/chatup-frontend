import { TokenService } from '../services/token.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SideComponent } from '../components/side/side.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { PostsComponent } from '../components/posts/posts.component';
import { PostService } from '../services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from '../components/comments/comments.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule
  ],
  declarations: [StreamsComponent, ToolbarComponent, SideComponent, PostFormComponent, PostsComponent, CommentsComponent],
  exports: [StreamsComponent, ToolbarComponent],
  providers: [TokenService, PostService]
})
export class StreamsModule { }
