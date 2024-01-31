import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkDrag,CdkDropList} from '@angular/cdk/drag-drop';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    ClipboardModule,
    CdkDrag,
    CdkDropList,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbAccordionModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
