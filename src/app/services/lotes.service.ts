import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LotesService {
  urlLotes = "https://tciconsultoria.com.mx/villaavocado/lotes.php";

  constructor(private http: HttpClient) { 

  }

  getLotes(folio: string){
    let data = {
      //"query": `{230.EX.${folio}}`,
      "Authorization": environment.userTocken
    }    
    return this.http.post(this.urlLotes, data);
  }
}
