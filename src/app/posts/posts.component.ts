import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];
  http;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts as Array<any>);

      // .subscribe(response => {
      //   console.log(response);
      //   this.posts = response as Array<any>;
      // }

      // , error => {
      //   alert('An unexpected error occurred.');
      //   console.log(error);
      // }
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
        }, 
      // (error: Response) => {
      //   if(error.status === 400) {
      //     // this.form.setErrors(error.json())
      //   }
      //   else {
      //     alert('An unexpected error occurred.');
      //     console.log(error);
      //   }
      // }
      (error: AppError) => {
        this.posts.splice(0, 1);

        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        }
        else throw error;
        // {  // can be handled by GlobalErrorHandler
        //   alert('An unexpected error occurred.');
        //   console.log(error);
        // }
      });
  }

  updatePost(post) {
    // patch: you may get a slight performance benefit
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        })
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    // this.service.delete(post.id)
    this.service.delete('') // occur un error
      .subscribe(
        null, 
        // optimistic update
        // () => {
          // let index = this.posts.indexOf(post);
          // this.posts.splice(index, 1);
        // }, 

        // (error: Response) => {
        //   if(error.status === 404)
        //     alert('This post has already deleted')
        //   else {
        //     alert('An unexpected error occurred.');
        //     console.log(error);
        //   }
        // }
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if(error instanceof NotFoundError)
            alert('This post has already deleted')
          else throw error;
        }
      );
  }
}
