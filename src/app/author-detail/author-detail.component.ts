import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(publish: boolean){
    this.isComplete.emit(publish);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
