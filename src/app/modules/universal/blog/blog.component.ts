import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit  {
  posts:any[]=[]
  constructor(private auth: AuthenticationService){}

  ngOnInit(): void {
    this.auth.getAPI('blogs/post/').subscribe(result => {
			this.posts = result['results'];
		})
  }

}
