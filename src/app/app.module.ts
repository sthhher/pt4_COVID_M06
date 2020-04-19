/*   
  @name = App Module TS
  @author = Esther Vendrell
  @version = 0.0.1
  @description = TypeScript of the App Module, where all the components,etc are imported
  @date = 19-04-2020 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesEntryComponent } from './clothes-entry/clothes-entry.component';
import { ClothesManagementComponent } from './clothes-management/clothes-management.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { FormsModule } from '@angular/forms';

//routing
const appRoutes: Routes = [
  { path: 'clothes-entry', component: ClothesEntryComponent },
  { path: 'clothes-management', component: ClothesManagementComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]   

@NgModule({
  declarations: [
    AppComponent,
    ClothesEntryComponent,
    ClothesManagementComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(  
      appRoutes, {enableTracing: false} //True for debugging purpouses only     
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
