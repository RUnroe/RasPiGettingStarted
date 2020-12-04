import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {
  pages = [
    {name: "Introduction", pageNum: 1},
    {name: "What You Will Need", pageNum: 2},
    {name: "Setup - Imaging", pageNum: 3},
    {name: "Setup - Booting", pageNum: 4},
    {name: "Overview", pageNum: 5},
    {name: "UI Tour", pageNum: 6},
    {name: "Explore", pageNum: 7}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
