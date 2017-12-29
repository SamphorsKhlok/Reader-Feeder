import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  // const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8face91fcda445d6887ba6d111d97844';

  url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8face91fcda445d6887ba6d111d97844';
  constructor(private http: HttpClient) { }

  getFeed() {
    return this.http.get(this.url);
  }

}
