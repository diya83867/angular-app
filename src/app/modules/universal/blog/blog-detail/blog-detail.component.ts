import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthenticationService } from '../../../../services/authentication.service';
import { MetaService } from '../../../../services/meta.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  postdetail:any=null
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe( map(result => result.matches),shareReplay() );
  constructor(private title:Title,private _formBuilder: FormBuilder ,private breakpointObserver: BreakpointObserver,private metaService:MetaService,@Inject(PLATFORM_ID) private platformId: Object ,private route:ActivatedRoute, private auth: AuthenticationService){
    this.getPostDetail()
    if(isPlatformBrowser(platformId)){
      localStorage.clear()
    }
  }
  user_message=''
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  data = [1, 2, 3, 4];

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  getPostDetail(){
    this.route.params.pipe().subscribe(params => {
      this.auth.getAPI('blogs/post/'+params['slug']+'/').subscribe(result => {
        this.postdetail = result;
        this.title.setTitle(this.postdetail['title']+" | Security Troops");
        let tags=this.postdetail?.tags?.map((item:any)=>item.title)
        this.metaService.setMetaTags(this.postdetail?.meta_title,this.postdetail?.meta_description,this.postdetail?.thumbnail,tags)
      })
    });
  }
}
