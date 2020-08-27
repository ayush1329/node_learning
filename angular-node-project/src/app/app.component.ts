import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'angular-node-project';
  model = {
    id: 23423,
    bookTitle: 'Ash',
    bookName: 'Horror & Comedy'
  };

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  public addBook() {
    this.model.id = Math.random();
    this.appService.addBook(this.model).subscribe(res => {
      console.log(res);
    });
  }

  public getBookById(id: string) {
    this.appService.getBookById(id).subscribe(res => {
      console.log(res);
    });
  }

  /** Helper Methods */

  private async getAllBooks() {
    let apiResposne = await this.appService.getAllbooks();
    console.log(apiResposne);
  }
}
