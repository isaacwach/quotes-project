export class Quote {
   showAuthor: boolean;
   constructor(public quote: string, public author: string, public person: string){
    this.quote = quote;
    this.author = author;
    this.person = person;
    this.showAuthor = false;
   }
   // quote: string;
   // author: string;
   // person: string;
  
}

