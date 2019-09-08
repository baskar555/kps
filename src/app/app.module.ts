import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FaqComponent,
    HomeComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
