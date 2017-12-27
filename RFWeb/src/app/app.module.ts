import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './app.material.module';
import { NavbarModule } from './shared/navbar/navbar';
import { HomeComponent } from './pages/home/home.component';
import { myRoutes } from './app.routers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    myRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
