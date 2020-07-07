import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ServiceAreaComponent } from './components/service-area/service-area.component';
import { Area1Component } from './components/area1/area1.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { Area2Component } from './components/area2/area2.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { Area3Component } from './components/area3/area3.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ServiceAreaComponent,
    Area1Component,
    PortafolioComponent,
    Area2Component,
    TeamMembersComponent,
    Area3Component,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
