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
    new Quote("ultimate sophistication", "eistein", "zac")
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
