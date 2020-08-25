import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { share } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient) {

    }

    getAllbooks() {
        return this.httpClient.get(`http://localhost:8080/books/getAllBooks`).toPromise();
    }

    getBookById(id) {
        return this.httpClient.get(`http://localhost:8080/books/id/${id}`);
    }

    addBook(model: any) {
        return this.httpClient.post(`http://localhost:8080/books/addBook`, model);
    }

    deleteBook(id) {
        return this.httpClient.get(`http://localhost:8080/books/delete/${id}`);
    }

    updateBook(id) {
        return this.httpClient.get(`http://localhost:8080/books/update/${id}`);
    }

}