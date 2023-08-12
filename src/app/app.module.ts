import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleProfileComponent } from './components/single-profile/single-profile.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleProfileComponent,
    ProfileListComponent,
    HeaderComponent,
    AddProfileComponent,
    HelpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
