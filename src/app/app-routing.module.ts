import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./components/layout/master/master.component";
import {BookListComponent} from "./components/book/book-list/book-list.component";
import {BookAddComponent} from "./components/book/book-add/book-add.component";
import {BookUpdateComponent} from "./components/book/book-update/book-update.component";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'book',
        component: BookListComponent
      },
      {
        path: 'book/add',
        component: BookAddComponent
      },
      {
        path: 'book/detail/:id',
        component: BookListComponent,
      },
      {
        path: 'book/update/:id',
        component: BookUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
