import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResponsiveMenuComponent } from './components/responsive-menu/responsive-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavBarComponent,
    ResponsiveMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
