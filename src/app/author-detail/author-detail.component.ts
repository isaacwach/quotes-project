import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
