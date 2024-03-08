import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientService } from "src/app/services/http-client.service";

@Injectable({
    providedIn: 'root'
})

export class DashboardService {

    constructor(private httpService: HttpClientService) {
    }

    processFile(formData: FormData): Observable<any[]> {
        return this.httpService.post('data/parse-file', formData);
    }

    getUpdatedData(): Observable<any[]> {
        return this.httpService.get('data/updated-data');
    }
}