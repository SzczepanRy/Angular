import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderElsComponent } from './header/header-els/header-els.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './container/list/list.component';
import { ProductComponent } from './container/list/product/product.component';
import { FillterComponent } from './container/list/fillter/fillter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderElsComponent,
    ContainerComponent,
    SearchComponent,
    ListComponent,
    ProductComponent,
    FillterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
