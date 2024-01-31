import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path:'blog/:slug',
    component:BlogDetailComponent
  },
  {
    path:'',
    component:BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
