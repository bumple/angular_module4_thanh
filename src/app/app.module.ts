import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterComponent } from './components/layout/master/master.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    NavbarComponent,
    BookListComponent,
    BookAddComponent,
    BookDetailComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
