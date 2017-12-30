import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SiteTheme, ThemeService} from '../../services/theme/theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  // encapsulation: ViewEncapsulation.Native
})
export class ThemePickerComponent implements OnInit {
  currentTheme: SiteTheme;
  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.getThemeStorage();
  }

  detectChange() {
    // console.log('toggler changed');
    console.log(this.currentTheme);

    if (this.currentTheme.themeName === ThemeService.DEFAULT_THEME.themeName) {
      // console.log('to dark');
      this.currentTheme = ThemeService.DARK_THEME;
    }else {
      // console.log('to default');
      this.currentTheme = ThemeService.DEFAULT_THEME;
    }
    this.themeService.setThemeStorage(this.currentTheme);
  }

}
