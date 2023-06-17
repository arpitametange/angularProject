import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService:PostService ) { }

arrray:Array<any>=[]
    ngOnInit() {

      this.postService.GetAllPosts().subscribe(res => {
        console.log('get all posts', res);
        this.arrray=res
      })




      
      this.postService.GetPostById(77).subscribe(res=>{
        console.log(res);
        
      })
      this.updatePost()
      this.deletePostById()
      this.createPost()

      
  }
  updatePost() {
    let data = {
      id: new Date().getTime(),
      title: 'This is updated title'
    }

    this.postService.UpdatePostById(1, data).subscribe(res => {
      console.log('data updated successfully', res);
    })
  }

  deletePostById() {
    this.postService.DeletePostById(1).subscribe(res => {
      console.log('post deleted successfully', res);
    })
  }

  createPost() {
    let body = {
      id: new Date().getTime(),
      title: 'This is new post',
      body: 'This is the test post method of httpclient'
    }
    this.postService.CreatePost(body).subscribe(res => {
      console.log('Poste created successfully', res);
    })
  }

  
}
