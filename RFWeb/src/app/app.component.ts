import {Component, OnInit} from '@angular/core';
import {SiteTheme, ThemeService} from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: SiteTheme ;
  constructor( private themeService: ThemeService) {
    this.theme = this.themeService.getThemeStorage();
    if (this.theme == null) {
      this.theme = ThemeService.DEFAULT_THEME;
      this.themeService.setThemeStorage(this.theme);
    }
    this.themeService.onThemeUpdate.subscribe(
      data => this.theme = data,
      error => console.error(error),
      () => console.log('complete')
    );
  }
}
