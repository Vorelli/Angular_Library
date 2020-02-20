import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./book-list.component";
import { BookListAdderComponent } from "./book-list-adder.component";

const routes: Routes = [
  { path: "booklist", component: BookListComponent },
  { path: "addBook", component: BookListAdderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookListRoutingModule {}
