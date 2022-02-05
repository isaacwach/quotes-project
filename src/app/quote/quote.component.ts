import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'quotes';
  quotes:Quote[]=[
    new Quote("ultimate sophistication", "eistein", "zac", "")
    
  ]

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
