import { Component, OnInit } from '@angular/core';
import { GlobalOptions } from '../options';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  pages = GlobalOptions.pages;
  currPageName;
  
  constructor(private router:Router) { 
    for(let page of this.pages) {
      if(page.pageNum == 1) this.currPageName = page.name;
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    document.getElementsByTagName("nav")[0].classList.add("hidden");
  }



  navigateClick(index:number) {
    this.router.navigate([`/page-${index}`]);
  }
}
