import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
@Input() singlePost!: {
comments: any;name: string; Image: string; likes: number; isLiked: boolean;
};
@Output() newItemEvent = new EventEmitter<string>();
comment: string = "";

toggleHearts(singlePost:{
  name: string;
  Image: string;
  likes: number;
  isLiked: boolean;
  comments: string;
}){
  if (singlePost.isLiked) {
    singlePost.isLiked = false;
    singlePost.likes--;
  }else{
    singlePost.isLiked = true;
    singlePost.likes++;
  }
    
    }

    addNewItem() {
      this.newItemEvent.emit(this.comment);
      this.comment= "";
    }
}




