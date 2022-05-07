import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)private data : any,
    private service : PublicationService,
    private thisDg : MatDialogRef<CommentsComponent>
  ) { }

    form! : FormGroup;

  comments ! : any
  pubId ! : any

  ngOnInit(): void {
    //this.comments = this.data['commentaires']
    this.pubId = this.data['pubId']
    this.service.getComments(this.pubId).subscribe(res=>{
      this.comments = res;
    })
    this.form = new FormGroup({
      commentaire : new FormControl('',Validators.required)
    })

  }

  postComment(){
    let comment : Comment = new Comment();
    comment.comment = this.form.value.commentaire
    this.service.comment(1,this.pubId,comment).subscribe(()=>{
      this.thisDg.close();
    })
  }





}

export class Comment{
  comment : string
}
