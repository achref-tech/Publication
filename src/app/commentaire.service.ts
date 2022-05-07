import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from './commentaire';
import { Publication } from './publication';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private baseUR16:string = "http://localhost:8082/add-comment";
  private baseUR17:string = "http://localhost:8082/retrieve-all-comment/{idpub}/{iduser}";
  private baseURl8:string = "http://localhost:8082/publication/retrieve-pub";



  constructor(private httpClient :HttpClient) { }
  createCommentaire(commentaire:Commentaire,iduser:number,idpub:number): Observable<object>{
    return this.httpClient.post(`${this.baseUR16}/${iduser}/${idpub}`+commentaire+iduser,idpub);
}
getAllCommentaire(idpub:number,iduser) : Observable<Commentaire[]> {
  return this.httpClient.get<Commentaire[]>(this.baseUR17);
}
getPublicationById(idpub:number):Observable<Publication> {
  return this.httpClient.get<Publication>(`${this.baseURl8}/${idpub}`);
}

}
