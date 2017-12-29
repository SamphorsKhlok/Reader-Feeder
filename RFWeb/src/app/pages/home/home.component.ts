import { Component, OnInit, ElementRef} from '@angular/core';
import { HttpService} from '../../services/web/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];
  constructor(public service: HttpService, private el: ElementRef) { }

  ngOnInit() {
    this.getNewsFeed();
  }
  getNewsFeed() {
    this.service.getFeed().subscribe(
      data => this.data = data['articles'],
      error => console.error(error),
      () => console.log('load completed')
    );
  }

}
