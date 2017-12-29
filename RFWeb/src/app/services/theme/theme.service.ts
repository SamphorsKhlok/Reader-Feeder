import {EventEmitter, Injectable} from '@angular/core';

export interface SiteTheme {
  themeName: string;
}

@Injectable()
export class ThemeService {
  static storageKey = 'rf-theme-preference';
  static DEFAULT_THEME = {
    themeName: 'default-theme'
  };
  static DARK_THEME = {
    themeName: 'dark-theme'
  };

  public onThemeUpdate: EventEmitter<SiteTheme> = new EventEmitter<SiteTheme>();

  public getThemeStorage(): SiteTheme {
    console.log('getting theme from storage');
    try {
      return JSON.parse(window.localStorage[ThemeService.storageKey] || null);
    } catch (e) {
      console.error(e);
    }
  }

  public setThemeStorage(theme: SiteTheme) {
    console.log('setting theme into storage');
    try {
      window.localStorage[ThemeService.storageKey] = JSON.stringify(theme);
    }catch (e) {
      console.error(e);
    }

    this.onThemeUpdate.emit(theme);
  }

  public resetThemeStorage() {
    try {
      window.localStorage.removeItem(ThemeService.storageKey);
    } catch (e) {
      console.error(e);
    }
  }

}
