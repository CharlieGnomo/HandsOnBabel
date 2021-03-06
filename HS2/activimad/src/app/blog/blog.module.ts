import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ActivimadService } from '../services/activimad.service';
import { BlogComentComponent } from './blog-coment/blog-coment.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  exports: [
    BlogComponent,
    BlogDetailsComponent,
    BlogComentComponent
  ],
  providers: [
    PostService,
    ActivimadService
  ],
  declarations: [BlogComponent, BlogPostComponent, BlogFormComponent, BlogDetailsComponent, BlogComentComponent]
})
export class BlogModule { }
