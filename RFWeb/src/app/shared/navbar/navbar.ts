import {Component, NgModule, OnInit} from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { MatCommonModule} from '@angular/material';
import { RouterModule} from '@angular/router';
import { MatIconModule} from '@angular/material/icon';

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
@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatCommonModule, RouterModule, MatToolbarModule, MatIconModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule {}

