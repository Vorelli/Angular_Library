import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BookListComponent } from "./book-list.component";
import { BookListRoutingModule } from "./book-list-routing.module";
import { BookListAdderComponent } from "./book-list-adder.component";

@NgModule({
  declarations: [BookListComponent, BookListAdderComponent],
  imports: [CommonModule, BookListRoutingModule, FormsModule]
})
export class BookListModule {}
