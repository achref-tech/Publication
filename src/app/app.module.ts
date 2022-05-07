import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { HttpClientModule } from'@angular/common/http';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { CreateVoteComponent } from './create-vote/create-vote.component';
import { PublicationMaxComponent } from './publication-max/publication-max.component';
import { CreateCommentaireComponent } from './create-commentaire/create-commentaire.component';
import { CommentsComponent } from './comments/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    PublicationListComponent,
    CreatePublicationComponent,
    UpdatePublicationComponent,
    PublicationDetailsComponent,
    CreateVoteComponent,
    PublicationMaxComponent,
    CreateCommentaireComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
