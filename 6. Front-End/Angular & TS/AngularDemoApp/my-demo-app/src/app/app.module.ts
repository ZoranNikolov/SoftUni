import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent, NavigationComponent],
})
export class AppModule {}
