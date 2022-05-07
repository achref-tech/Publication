import { Component, OnInit } from '@angular/core';
import { Vote } from '../vote';
import { VoteService } from '../vote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../publication';
import { User } from '../user';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent implements OnInit {
  vote:Vote =new Vote ();
  
  idpub:number;
  iduser:number;
  note:number;
  publication:Publication = new Publication();
  user:User=new User();
  constructor(private voteService:VoteService,private route:ActivatedRoute,
     private router:Router ) { }

  ngOnInit(): void {
    this.idpub=this.route.snapshot.params['idpub'];
    this.iduser=this.route.snapshot.params['iduser'];
    this.note=this.route.snapshot.params['note'];
    this.voteService.getPublicationById(this.idpub).subscribe(data => {
      this.publication=data;
    },error => console.log(error));
    
      
  }
  
  savevote() {
    this.voteService.createVote(this.idpub,this.iduser,this.note).subscribe(data => {
    console.log(data);
    this.goToPublicationlist();
    },
    error => console.log(error));
    }
  
  
    goToPublicationlist() {
      this.router.navigate(['/publications']);


    }
    onSubmit() {
      console.log(this.vote);
    this.savevote();
    
}
}