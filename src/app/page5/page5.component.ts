import { Component, OnInit } from '@angular/core';
import { GlobalOptions } from '../options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  pages = GlobalOptions.pages;
  currPageName;
  
  constructor(private router:Router) { 
    for(let page of this.pages) {
      if(page.pageNum == 5) this.currPageName = page.name;
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }



  navigateClick(index:number) {
    this.router.navigate([`/page-${index}`]);
  }

}