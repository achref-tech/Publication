import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { catchError, map, startWith } from 'rxjs';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';
import { CommentsComponent } from '../comments/comments.component';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { User } from '../user';
import { Vote } from '../vote';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  numberOflikes: number = 0;
  public images: any = [];
  publications: Publication[];
  votes: Vote[];
  commentaire: Commentaire = new Commentaire();
  commenter: string;
  notemax: string;
  maxpub: number;
  votev: Publication[];
  idpub: number;
  iduser: number;
  comment: string;
  commentaires: Commentaire[];

  constructor(
    private publicationservice: PublicationService,
    private voteservice: VoteService,
    private commentaireService: CommentaireService,
    private _sanitizer: DomSanitizer,
    private router: Router,
    private dg : MatDialog
    ) { }

  ngOnInit(): void {


    this.getPublications();
    //this.getVotes();
    //this.getCommentaires();
    // this.publicationservice.file().subscribe(response => {
    //   this.images = response;
    // })

  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  private getPublications() {

    this.publicationservice.getAllPublication().subscribe(data => {
      this.publications = data;
    });
  }
  
  publicationDetails(idpub: number) {
    this.router.navigate(['publication-details', idpub]);


  }
  MaxPublication(idpub: number) {
    this.router.navigate(['publications', idpub]);

  }
  updatePublication(idpub: number) {
    this.router.navigate(['update-publication', idpub]);

  }
  
  

  deletePublication(idpub: number) {
    let v = confirm("Etes vous sure?");
    if (v == true)
      this.publicationservice.deletePublication(idpub).subscribe(data => {
        console.log(data);
        this.getPublications();
      })

  }

  selectpublicationmax() {
    this.publicationservice.getAllPublication().subscribe(data => {
      this.publications = data;
    });
  }
  goToPublicationlist() {
    this.router.navigate(['/publications']);

  }
  saveVote() {

  }
  likeButtonClick(idPub : number) {
    this.publicationservice.like(idPub).subscribe(()=>{
      this.getPublications();
    })
  }
  dislikeButtonClick(idPub : number) {
    this.publicationservice.dislike(idPub).subscribe(()=>{
      this.getPublications();
    })
  }

  openComments(commentaires : any, pubId : number){
    this.dg.open(CommentsComponent,{
      data : {
        commentaires : commentaires,
        pubId : pubId
      }
    }).afterClosed().subscribe(()=>{
      this.getPublications();
    })
  }



}



