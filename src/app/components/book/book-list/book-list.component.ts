import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books1 = ['STT','Title','Author','Description']
  books:any;

  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.bookService.getAll().subscribe((res:any) =>{
      this.books = res;
    })
  }

  delete(id:any){
    this.bookService.delete(id).subscribe(()=>{
      this.getAllData()
    })
  }



}
