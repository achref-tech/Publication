import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {
  idpub:number
  publication:Publication
  constructor(private route:ActivatedRoute,private publicationService:PublicationService) { }

  ngOnInit(): void {
    this.idpub=this.route.snapshot.params['idpub'];
    this.publication=new Publication();
    this.publicationService.getPublicationById(this.idpub).subscribe(data => {
    this.publication=data;
    });
  }

}
