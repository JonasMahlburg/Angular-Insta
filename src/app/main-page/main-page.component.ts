import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})


export class MainPageComponent {
  posts :{
    name: string;
    Image: string;
    likes: number;
  isLiked: boolean;}[] = [{
                       name: "Hans",
                       Image: "./assets/img/banana.jpg",
                       likes: 1234,
                       isLiked: false,
                      },
                      {
                        name: "Hildegard",
                        Image: "./assets/img/orange.jpg",
                        likes: 12,
                        isLiked: false,
                       },
                       {
                        name: "Dieter",
                        Image: "./assets/img/currant.jpg",
                        likes: 156,
                        isLiked: false,
                       }];

  constructor(){

  }

 toggleHeart(index: number){
if (this.posts[index].isLiked) {
  this.posts[index].isLiked = false;
  this.posts[index].likes--;
}else{
  this.posts[index].isLiked = true;
  this.posts[index].likes++;
}
  
  }
}

