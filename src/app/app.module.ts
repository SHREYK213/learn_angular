import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsIdComponent } from './user/user-details-id/user-details-id.component';
import { MatCardModule } from '@angular/material/card';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    UserDetailsIdComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
