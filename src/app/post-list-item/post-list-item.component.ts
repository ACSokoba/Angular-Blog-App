import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;


  ngOnInit() {
  }

  getColor(){
    if (this.loveIts > 0)
      return 'green';
    if (this.loveIts < 0)
      return 'red';
  }

  upvote(){ 
    this.loveIts ++;
  }

  downvote(){
    this.loveIts --;
  }

}
