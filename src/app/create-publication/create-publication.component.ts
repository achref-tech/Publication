import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  publication: Publication = new Publication();
  url = "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/276110049_1790299901176552_4130439266325606134_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=yeu-8BPGKXYAX_Xeyc-&_nc_ht=scontent.ftun14-1.fna&oh=00_AT-jcJK75SXcEJ_Bkdw76Nn0dnEXPaPfTr41D2i7roOCTw&oe=6263B6BB"


  constructor(private publicationService: PublicationService,
    private router: Router) { }
  selectedFile!: File

  imagePreview: any;
  iduser: number;

  form: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      // note: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })

  }

  formData: FormData;

  goToPublicationlist() {
    this.router.navigate(['/publications']);

  }

  onFileUpload(event) {
    console.log(event.target.files)
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);

  }
  savePublication() {
    this.formData = new FormData();
    if (this.form.valid) {
      // this.formData.append('note', this.form.value.note)
      this.formData.append('type', this.form.value.type)
      this.formData.append('description', this.form.value.description),
        this.formData.append('image', this.selectedFile, this.selectedFile.name);
      this.publicationService.createPublication(this.formData, 3).subscribe(() => {
        this.goToPublicationlist();
      })
    }
    // this.publicationService.createPublication(this.publication, this.iduser).subscribe(data => {
    //   console.log(data);
    //   this.goToPublicationlist();
    // },
    //   error => console.log(error));
  }

  onSubmit() {
    console.log(this.publication);
    this.savePublication();
  }
}
