import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {
    constructor(private http: HttpService) {
    }
    getQuotes() {
        return this.http.get('https://elcomercio.pe/feed')
        .pipe(
            map(response => response.data),
        );
    }
    getQuote(id) {
        // tslint:disable-next-line: no-console
        console.log('El id: es: ' + JSON.stringify(id));
        return this.http.get('https://elcomercio.pe/feed')
        .pipe (
            map(response => response.data),
        );
    }
    getRandomQuote() {
        return this.http.get('http://quotesdesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .pipe(
            map(response => response.data),
        );
    }
}
