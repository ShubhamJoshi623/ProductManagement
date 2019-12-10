import { Injectable } from '@angular/core';
import { userSettings } from './user-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }

  getsubscriptiontypes(): Observable<string[]> {
   return of(['monthly','annual','lifetime']);
  }

  postUserSettingsForm(userSettings:userSettings):Observable<any>
  {

    return this.http.post('https://putsreq.com/0a0cEYHoTG07sIIZi2kK',userSettings);
    // return of(userSettings);
  }
}
