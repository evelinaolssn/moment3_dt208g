import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ConverterComponent } from './pages/converter/converter';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'converter', component: ConverterComponent },
      { path: 'about', component: AboutComponent }
];
