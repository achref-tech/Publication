import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vote } from './vote';
import { Observable } from 'rxjs';
import { Publication } from './publication';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private baseUR9:string = "http://localhost:8082/add-votelike";
  private baseUR10:string = "http://localhost:8082/retrieve-all-Vote";
  private baseURl2:string = "http://localhost:8082/publication/retrieve-pub";

  constructor(private httpClient :HttpClient) { }
  createVote(idpub:number,iduser:number,note:number): Observable<object>{
    return this.httpClient.post(`${this.baseUR9}/${idpub}/${iduser}/${note}`+idpub,iduser+note);
}
getAllVote() : Observable<Vote[]> {
  return this.httpClient.get<Vote[]>(this.baseUR10);
}
getPublicationById(idpub:number):Observable<Publication> {
  return this.httpClient.get<Publication>(`${this.baseURl2}/${idpub}`);
}

}