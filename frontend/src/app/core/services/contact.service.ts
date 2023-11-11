import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Contact } from "../../models/contact.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = 'http://localhost:3001/contacts'

  constructor(private http: HttpClient) { }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact)
  }

  list(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl)
  }
}
