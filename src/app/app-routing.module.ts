import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCommentaireComponent } from './create-commentaire/create-commentaire.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { CreateVoteComponent } from './create-vote/create-vote.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationMaxComponent } from './publication-max/publication-max.component';
import { UpdatePublicationComponent } from './update-publication/update-publication.component';

const routes: Routes = [
{ path :'publications',component:PublicationListComponent},
{ path :'',redirectTo:'publications',pathMatch:'full'},
{ path :'create-publication/:iduser',component: CreatePublicationComponent},
{ path :'create-vote/:idpub/:iduser/:note',component:CreateVoteComponent},
{ path :'create-commentaire/:iduser/:idpub',component:CreateCommentaireComponent},
{ path :'publication-max',component:PublicationMaxComponent},
{ path :'create-publication',component: CreatePublicationComponent},

{ path :'update-publication/:idpub',component: UpdatePublicationComponent},
{ path :'publication-details/:idpub',component:PublicationDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
