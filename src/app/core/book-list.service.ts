import { Injectable, OnInit } from "@angular/core";
import { IBook } from "../shared/interfaces";

@Injectable()
export class BookListService {
  private _booklist: IBook[] =
    JSON.parse(localStorage.getItem("booklist")) || [];

  getBooklist() {
    return this._booklist;
  }

  exists(lookingFor: IBook): boolean {
    return !!this._booklist.find(book => {
      return book.name == lookingFor.name; //&& book.author == lookingFor.author && book.pageCount == lookingFor.pageCount && book.readStatus == lookingFor.readStatus;
    });
  }

  addBook(book: IBook): boolean {
    if (!this.exists(book)) {
      this._booklist.push(book);
      this.save();
      return true;
    }
    return false;
  }

  removeBook(removing: IBook) {
    let index = this._booklist.findIndex(book => {
      return (
        book.name == removing.name &&
        book.author == removing.author &&
        book.pageCount == removing.pageCount &&
        book.readStatus == removing.readStatus
      );
    });
    return this._booklist.splice(index, index + 1);
    this.save();
  }

  toggleRead(book: IBook) {
    book.readStatus = !book.readStatus;
    this.save();
  }

  save() {
    localStorage.setItem("booklist", JSON.stringify(this._booklist));
  }
}
