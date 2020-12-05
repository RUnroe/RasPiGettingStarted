import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';

const routes: Routes = [
  {path:'', component: MasterPageComponent, children: [
    {path:'page-1', component:Page1Component},
    {path:'page-2', component:Page2Component},
    {path:'page-3', component:Page3Component},
    {path:'page-4', component:Page4Component},
    {path:'page-5', component:Page5Component},
    {path:'page-6', component:Page6Component},
    {path:'page-7', component:Page7Component},
    {path:'page-8', component:Page8Component}
    
  ]},
  {path:'**', redirectTo: '/page-1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
