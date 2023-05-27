import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { FailedScrapesComponent } from 'src/app/admin/failed-scrapes/failed-scrapes.component';
import { OfferingsComponent } from 'src/app/admin/offerings/offerings.component';
import { RoastersComponent } from 'src/app/admin/roasters/roasters.component';
import { ScrapingConfigComponent } from 'src/app/admin/scraping-config/scraping-config.component';
import { HomeComponent } from 'src/app/public/home/home.component';
import { OfferingComponent } from 'src/app/public/offering/offering.component';
import { RoasterComponent } from 'src/app/public/roaster/roaster.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'roaster/:id', component: RoasterComponent },
  { path: 'offering/:id', component: OfferingComponent },
  { path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/roasters', component: RoastersComponent },
  { path: 'admin/offerings', component: OfferingsComponent },
  { path: 'admin/scraping-config', component: ScrapingConfigComponent },
  { path: 'admin/failed-scrapes', component: FailedScrapesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
