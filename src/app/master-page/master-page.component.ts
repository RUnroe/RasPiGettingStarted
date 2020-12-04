import { Component, OnInit } from '@angular/core';
import { GlobalOptions } from '../options';
@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {
  pages = GlobalOptions.pages;
  constructor() { 
    console.log(this.pages);
    console.log(GlobalOptions);
  }

  ngOnInit(): void {
  }

}
