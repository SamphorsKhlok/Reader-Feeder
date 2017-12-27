import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements  OnInit {
  message = 'Welcome to Reader Feeder';

  ngOnInit() {

  }
}

