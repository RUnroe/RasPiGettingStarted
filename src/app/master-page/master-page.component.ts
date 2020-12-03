import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {
  pages = [
    "Introduction",
    "Setup - Imaging",
    "Setup - Booting",
    "Overview",
    "UI Tour",
    "Explore"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
