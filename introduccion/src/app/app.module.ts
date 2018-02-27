import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryApiService } from "./in-memory-api.service";
import { UsersService } from './users.service';
import { UserCrudComponent } from './user-crud/';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UserCrudComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
