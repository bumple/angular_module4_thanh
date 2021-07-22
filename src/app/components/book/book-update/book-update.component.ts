import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../service/book.service";



@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  formGroup: FormGroup | undefined;
  // book:any;
  constructor(private fb: FormBuilder,
              private router: Router,
              private bookService: BookService,
              private activatedRouter: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.activatedRouter.snapshot.paramMap.get('id');

    this.bookService.detail(id).subscribe((res:any)=>{
      let book = res;
      // this.book = res;
      this.formGroup = this.fb.group({
        title: [book.title,],
        author: [book.author,],
        description: [book.description,],
      })
    });
  }

  submit(){
    // @ts-ignore
    let id = +this.activatedRouter.snapshot.paramMap.get('id');
    let data = this.formGroup?.value;
    this.bookService.update(id,data).subscribe(()=>{
      this.router.navigate(['book'])
    })
  }
  back(){
    this.router.navigate(['book'])
  }

}
