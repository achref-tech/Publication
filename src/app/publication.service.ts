import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from './publication';
import { Vote } from './vote';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseURl:string = "http://localhost:8082/publication/retrieve-all-publication";
  private baseURl1:string = "http://localhost:8082/publication/add-pub";
  private baseURl2:string = "http://localhost:8082/publication/retrieve-pub";
  private baseURl3:string = "http://localhost:8082/publication/modify-pub";
  private baseURL4:string = "http://localhost:8082/publication/remove-publication";
  private baseURL5:string = "http://localhost:8082/publication/retrieve-maxpub";
  
  

  constructor(private httpClient :HttpClient) {}
    getAllPublication() : Observable<Publication[]> {
      return this.httpClient.get<Publication[]>(this.baseURl);

    }
    createPublication(fd:FormData,iduser:number): Observable<any>{
      return this.httpClient.post(this.baseURl1+"/"+iduser,fd);

    }
    getPublicationById(idpub:number):Observable<Publication> {
      return this.httpClient.get<Publication>(`${this.baseURl2}/${idpub}`);
    }
    updatePublication(fd:FormData):Observable<Publication> {
      return this.httpClient.put<Publication> (`${this.baseURl3}`,fd);
    }
    
    deletePublication(idpub:number):Observable<Object> {
      return this.httpClient.delete(`${this.baseURL4}/${idpub}`);
    }
    file():Observable<any> {
      return this.httpClient.get('http://localhost:8082/publication/file');
    }

    getPublicationByMaxNote():Observable<any> {
      return this.httpClient.get("http://localhost:8082/publication/retrieve-maxpub");
    }


    comment(userId : Number , pubId : Number, comment : any) :Observable<any> {
      return this.httpClient.post("http://localhost:8082/add-comment-properly/"+userId+"/"+pubId,comment)
    }

    like(pubId : Number) : Observable<any>{
      return this.httpClient.put("http://localhost:8082/publication/like-pub/"+pubId,null)
    }

    dislike(pubId : Number) : Observable<any>{
      return this.httpClient.put("http://localhost:8082/publication/dislike-pub/"+pubId,null)
    }

    getComments(idPub : number) : Observable<any>{
      return this.httpClient.get("http://localhost:8082/get-comments/"+idPub);
    }


    

   
}
