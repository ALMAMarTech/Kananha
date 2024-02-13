import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './vista/home/home.component';
import { PartnesComponent } from './vista/partnes/partnes.component';
import { BuildingComponent } from './vista/building/building.component';
import { CalculadoraComponent } from './vista/calculadora/calculadora.component';
import { AvisoComponent } from './component/aviso/aviso.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './cabecera/menu/menu.component';
import { FooterComponent } from './cabecera/footer/footer.component';
  const routes: Routes =[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {title: 'Kanan-Há Eco Organic Town'}},
    {path: 'brokers', component: PartnesComponent, data: {title: 'Conviértete en broker'}},
    {path: 'building', component: BuildingComponent, data: {title: 'Building'}},
    {path: 'calculadora', component: CalculadoraComponent, data: {title: 'Calculadora de beneficios'}},
    {path: 'aviso-de-privacidad', component: AvisoComponent, data: {title:'Aviso de privacidad'}},
    {path: '**', redirectTo:'home'}
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnesComponent,
    BuildingComponent,
    CalculadoraComponent,
    AvisoComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation:'ignore', anchorScrolling:'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
