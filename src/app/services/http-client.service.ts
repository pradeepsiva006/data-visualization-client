import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private http: HttpClient) { }

    private handleResponse<T>(observable: Observable<T>): Observable<T> {
        return observable.pipe(
            map((response: any) => response),
            catchError((error: any) => {
                console.error('HTTP Error:', error);
                throw error;
            })
        );
    }

    get<T>(endpoint: string): Observable<T> {
        const url = `${environment.apiBaseUrl}/${endpoint}`;
        return this.handleResponse(this.http.get<T>(url));
    }

    post<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
        const url = `${environment.apiBaseUrl}/${endpoint}`;
        return this.handleResponse(this.http.post<T>(url, data, { headers }));
    }
}
