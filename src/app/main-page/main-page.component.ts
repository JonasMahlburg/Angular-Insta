import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})


export class MainPageComponent {

  comments = ['item1', 'item2', 'item3', 'item4'];

  posts :{
    name: string;
    Image: string;
    likes: number;
  isLiked: boolean;
comments: string[]}[] = [{
                       name: "Hans",
                       Image: "./assets/img/banana.jpg",
                       likes: 1234,
                       isLiked: false,
                       comments: ['wünschte meine würden auch so wachsen', 'unreifes Ding']
                      },
                      {
                        name: "Hildegard",
                        Image: "./assets/img/orange.jpg",
                        likes: 12,
                        isLiked: false,
                        comments: ['yummy']
                       },
                       {
                        name: "Dieter",
                        Image: "./assets/img/currant.jpg",
                        likes: 156,
                        isLiked: false,
                        comments: ['Ich mag Züge']
                       }];
  
  

                       addItem(newItem: string, i: number) {
                        this.posts[i].comments.push(newItem);
                      }



}

