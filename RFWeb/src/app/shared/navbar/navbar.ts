import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements  OnInit {
  message = 'Reader Feeder';

  ngOnInit() {

  }
}

