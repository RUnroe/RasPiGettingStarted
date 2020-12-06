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
    
  }

  ngOnInit(): void {
    
  }

  toggleNavBar() {
    let nav = document.getElementsByTagName("nav")[0];
    if(nav.classList.contains("hidden")) nav.classList.remove("hidden");
    else nav.classList.add("hidden");

  }

}
