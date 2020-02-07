import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataType } from './list/dataType';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListDetailService {
  _url = '/assets/data.json';

  constructor(private _http: HttpClient) { }

  serviceMethod(): Observable<DataType[]>{
    return this._http.get<DataType[]>(this._url)
               .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server error");
  }
}
