import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  formGroup: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })
  }

  submit() {
    let data = this.formGroup?.value;
    this.bookService.add(data).subscribe(()=>{
      this.router.navigate(['book'])
    });
  }


}
