import { Component, OnInit } from '@angular/core';
import { GlobalOptions } from '../options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss']
})
export class Page7Component implements OnInit {

  pages = GlobalOptions.pages;
  currPageName;
  
  constructor(private router:Router) { 
    for(let page of this.pages) {
      if(page.pageNum == 7) this.currPageName = page.name;
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }



  navigateClick(index:number) {
    this.router.navigate([`/page-${index}`]);
  }
}