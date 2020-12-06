import { Component, OnInit } from '@angular/core';
import { GlobalOptions } from '../options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})
export class Page6Component implements OnInit {

  pages = GlobalOptions.pages;
  currPageName;
  
  constructor(private router:Router) { 
    for(let page of this.pages) {
      if(page.pageNum == 6) this.currPageName = page.name;
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