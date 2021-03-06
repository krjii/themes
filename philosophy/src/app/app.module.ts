import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { DisqusModule } from 'ngx-disqus';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './core/search/search.component';
import { NewsletterComponent } from './core/newsletter/newsletter.component';
import { ContactComponent } from './core/contact/contact.component';
import { CategoriesComponent } from './core/categories/categories.component';
import { RecentpostsComponent } from './core/recentposts/recentposts.component';
import { SocialbuttonsComponent } from './core/socialbuttons/socialbuttons.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AutoFocusDirective } from './core/auto-focus.directive';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    NotfoundComponent,
    SearchComponent,
    NewsletterComponent,
    ContactComponent,
    CategoriesComponent,
    RecentpostsComponent,
    SocialbuttonsComponent,
    FooterComponent,
    HeaderComponent,
    AutoFocusDirective,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
		FormsModule,
		NgxMasonryModule,
    DisqusModule.forRoot('rturnet')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }