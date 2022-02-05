export class Quote {
   showAuthor: boolean;
   constructor(public quote: string, public author: string, public person: string, public publishDte: string){
    this.showAuthor = false;
   }
  
}

