import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootrerComponent } from './shared/footrer/footrer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BtnTopComponent } from './shared/btn-top/btn-top.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { LikesComponent } from './pages/likes/likes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home/home.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FootrerComponent,
    HeaderComponent,
    BtnTopComponent,
    ProjectsComponent,
    AboutmeComponent,
    LikesComponent,
    ContactComponent,
    TechnologiesComponent,
    NopagefoundComponent,
    HomeComponent,
    WhatsappComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
