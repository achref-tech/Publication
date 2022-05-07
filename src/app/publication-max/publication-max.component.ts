import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-max',
  templateUrl: './publication-max.component.html',
  styleUrls: ['./publication-max.component.css']
})
export class PublicationMaxComponent implements OnInit {
  idpub:number;
  note:number;
  publication:Publication;
  max:number;
  constructor(private route:ActivatedRoute,private publicationService:PublicationService) { }
 

  ngOnInit(): void {
    //this.idpub=this.route.snapshot.params['idpub'];
    this.publication=new Publication();
    this.publicationService.getPublicationByMaxNote().subscribe(data => {
      this.publication=data;
      console.log(this.publication)
    });
  }

  


}

