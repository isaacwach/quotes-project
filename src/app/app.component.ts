import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quotes:Quote[]=[
    { quote: "silence the ultimate sophistication", author:"Eistein", person:"mike"},
    { quote: "silence the ultimate sophistication", author:"Eistein", person:"mike"},
    { quote: "silence the ultimate sophistication", author:"Eistein", person:"mike"}
    
  ]
}
