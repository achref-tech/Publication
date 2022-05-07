import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {
  idpub: number;
  publication: Publication = new Publication();

  constructor(private publicationService: PublicationService, private route: ActivatedRoute
    , private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {
    this.idpub = this.route.snapshot.params['idpub'];
    this.publicationService.getPublicationById(this.idpub).subscribe(data => {
      this.publication = data;
      console.log(this.publication);
      this.form = new FormGroup({
        type: new FormControl(this.publication.type, [Validators.required]),
        description: new FormControl(this.publication.description, [Validators.required])
      })

    });

  }

  fd : FormData;

  onSubmit() {
    this.fd = new FormData();
    if (this.form.valid) {
      //this.publication = new Publication();
      this.fd.append('type',this.form.value.type)
      this.fd.append('description',this.form.value.description)
      this.fd.append('idPub',this.publication.idpub.toString())
      //this.publication.description = this.form.value.description
      //this.publication.type = this.form.value.type
      this.publicationService.updatePublication(this.fd).subscribe(data => {
        this.goToPublicationlist();
      })
    }




  }
  goToPublicationlist() {
    this.router.navigate(['/publications']);

  }
}