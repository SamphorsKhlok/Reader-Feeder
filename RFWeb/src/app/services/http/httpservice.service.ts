import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  getFeed() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8face91fcda445d6887ba6d111d97844';
    return this.http.get(url);
  }

}
