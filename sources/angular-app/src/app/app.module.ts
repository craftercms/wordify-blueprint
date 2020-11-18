import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SortByPipe } from './sort-by.pipe';
import { SliderComponent } from './slider/slider.component';
import { DynamicRouteComponent } from './dynamic-route/dynamic-route.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { SidebarBiosComponent } from './sidebar-bios/sidebar-bios.component';
import { BioComponent } from './bio/bio.component';
import { RecentPostsAsideComponent } from './popular-posts-aside/recent-posts-aside.component';
import { SidebarCategoriesComponent } from './sidebar-categories/sidebar-categories.component';
import { SidebarTagsComponent } from './sidebar-tags/sidebar-tags.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { SidebarTaxonomiesComponent } from './sidebar-taxonomies/sidebar-taxonomies.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CategoryCard } from './category-card/category-card.component';
import { SearchComponent } from './search/search.component';
import { ContentTypeComponent } from './content-type/content-type.component';
import { ImageComponent } from './image/image.component';
import { ResponsiveColumnsComponent } from './responsive-columns/responsive-columns.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastComponent } from './toast/toast.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsCountComponent } from './comments-count/comments-count.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SortByPipe,
    SliderComponent,
    DynamicRouteComponent,
    PostCardComponent,
    SidebarSearchComponent,
    SearchFormComponent,
    SidebarBiosComponent,
    BioComponent,
    RecentPostsAsideComponent,
    SidebarCategoriesComponent,
    SidebarTagsComponent,
    CategoryComponent,
    ContactComponent,
    AboutComponent,
    PostComponent,
    SidebarTaxonomiesComponent,
    PaginationComponent,
    CategoryCard,
    SearchComponent,
    ContentTypeComponent,
    ImageComponent,
    ResponsiveColumnsComponent,
    RichTextComponent,
    NotFoundComponent,
    ToastComponent,
    CommentsComponent,
    CommentsCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
