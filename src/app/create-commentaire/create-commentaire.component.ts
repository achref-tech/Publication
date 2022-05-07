import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { User } from '../user';

@Component({
  selector: 'app-create-commentaire',
  templateUrl: './create-commentaire.component.html',
  styleUrls: ['./create-commentaire.component.css']
})
export class CreateCommentaireComponent implements OnInit {
  commentaire:Commentaire = new Commentaire();
  idpub:number;
  iduser:number;
  publication:Publication = new Publication();
  user:User=new User();
  

  constructor(private commentaireService:CommentaireService
    ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idpub=this.route.snapshot.params['idpub'];
    this.iduser=this.route.snapshot.params['iduser'];
    this.commentaireService.getPublicationById(this.idpub).subscribe(data => {
      this.publication=data;
    },error => console.log(error));
    
      
  }
  savecommentaire() {
    this.commentaireService.createCommentaire(this.commentaire,this.iduser,this.idpub).subscribe(data => {
    console.log(data);
    this.goToPublicationlist();
    },
    error => console.log(error));
    }
  
  
    goToPublicationlist() {
      this.router.navigate(['/publications']);


    }
    onSubmit() {
      console.log(this.commentaire);
    this.savecommentaire();
    
}
  
  
}
