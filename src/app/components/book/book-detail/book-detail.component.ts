import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
book:any;
  constructor(private bookService: BookService,
              private activated: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id');
    this.bookService.detail(id).subscribe((res:any) =>{
      this.book = res;
    })
  }
  back(){
    this.route.navigate(['book'])
  }

}
