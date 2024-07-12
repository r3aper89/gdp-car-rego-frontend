import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// app components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarTableComponent } from './components/car-table/car-table.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CarTableComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
