import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayoutModule } from './layout/defaultlayout/defaultlayout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IndexModule } from './pages/index/index.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageItemdetailModule } from './pages/itemdetail/page-itemdetail.module';
import { PageSearchModule } from './pages/search/page-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultLayoutModule,
    IndexModule,
    PageSearchModule,
    HttpClientModule,
    PageItemdetailModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
