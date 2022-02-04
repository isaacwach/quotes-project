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
    { quote: "silence the ultimate sophistication", author:"Eistein", person:"mike"},
    { quote: "silence the ultimate sophistication", author:"Eistein", person:"mike"},
    { quote: "silence the ultimate sophistication", author:"Eistein", person:"mike"}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
