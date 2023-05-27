import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { RoasterComponent } from './public/roaster/roaster.component';
import { OfferingComponent } from './public/offering/offering.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RoastersComponent } from './admin/roasters/roasters.component';
import { OfferingsComponent } from './admin/offerings/offerings.component';
import { ScrapingConfigComponent } from './admin/scraping-config/scraping-config.component';
import { FailedScrapesComponent } from './admin/failed-scrapes/failed-scrapes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoasterComponent,
    OfferingComponent,
    DashboardComponent,
    RoastersComponent,
    OfferingsComponent,
    ScrapingConfigComponent,
    FailedScrapesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
