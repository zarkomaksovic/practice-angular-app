import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './comps/home/home.component';
import { ContactComponent } from './comps/contact/contact.component';
import { ProductsComponent } from './comps/products/products.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  { path: 'home',           component: HomeComponent },
  { path: 'products',       component: ProductsComponent },
  { path: 'contact',        component: ContactComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
