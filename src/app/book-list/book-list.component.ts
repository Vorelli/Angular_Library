import { Component, OnInit, Input } from "@angular/core";
import { IBook } from "../shared/interfaces";
import { JsonPipe } from "@angular/common";
import { BookListService } from "../core/book-list.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.sass"]
})
export class BookListComponent implements OnInit {
  @Input() get booklist() {
    return this.booklistService.getBooklist();
  }

  toggleRead(book: IBook) {
    this.booklistService.toggleRead(book);
  }

  removeBook(removing: IBook) {
    this.booklistService.removeBook(removing);
  }

  //a: IBook = { name: "hiya", author: "blah", pageCount: 151, readStatus: true };
  constructor(private booklistService: BookListService) {}

  ngOnInit(): void {
    //this.booklist.push(this.a);
    //console.log(JSON.stringify(this.booklist));
    //console.log(localStorage.getItem("booklist"));
    //let tempList = JSON.parse(localStorage.getItem("booklist"));
    //if (tempList && tempList.length) this.booklist = tempList;
  }
}
