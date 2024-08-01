import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
@Input() singlePost!: {name: string; Image: string; likes: number; isLiked: boolean;};

toggleHearts(singlePost:{
  name: string;
  Image: string;
  likes: number;
  isLiked: boolean;
}){
  if (singlePost.isLiked) {
    singlePost.isLiked = false;
    singlePost.likes--;
  }else{
    singlePost.isLiked = true;
    singlePost.likes++;
  }
    
    }
}




