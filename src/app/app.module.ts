import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { TelefonoPipe } from './pipes/telefono.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    TelefonoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
