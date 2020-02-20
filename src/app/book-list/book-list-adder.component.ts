import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { BookListService } from "../core/book-list.service";

@Component({
  selector: "app-book-list-adder",
  templateUrl: "./book-list-adder.component.html",
  styleUrls: ["./book-list.component.sass", "./book-list-adder.component.sass"]
})
export class BookListAdderComponent implements OnInit {
  name: string;
  author: string;
  pageCount: number;
  readStatus: boolean;

  submit(event) {
    let goingToReturn = false;
    document
      .querySelectorAll(".content table input")
      .forEach((input: HTMLInputElement) => {
        if (!goingToReturn && !input.checkValidity()) {
          alert("Please fill out the " + input.id + " field.");
          goingToReturn = true;
        }
      });
    if (
      !goingToReturn &&
      this.booklistService.addBook({
        name: this.name,
        author: this.author,
        pageCount: this.pageCount,
        readStatus: !!this.readStatus
      })
    ) {
      this.router.navigate(["booklist"]);
    }
  }

  constructor(
    private router: Router,
    private booklistService: BookListService
  ) {}

  ngOnInit(): void {}
}
