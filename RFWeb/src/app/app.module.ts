import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './app.material.module';
import { NavbarComponent } from './shared/navbar/navbar';
import { HomeComponent } from './pages/home/home.component';
import { myRoutes } from './app.routers';
import { RouterModule} from '@angular/router';
import { HttpService} from './services/web/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { ThemePickerComponent } from './shared/theme-picker/theme-picker.component';
import { ThemeService} from './services/theme/theme.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ThemePickerComponent,
  ],
  imports: [
    myRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [HttpService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
