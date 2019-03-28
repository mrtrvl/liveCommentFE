import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Message, Messages } from '../interfaces/message.interface';
import { BASE_URL } from '../services/constants';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(
    private http: HttpClient,
  ) { }

  getModeratedMessages = () => {
    const url = `${BASE_URL}messages/`;
    return this.http.get<Messages>(url);
  }

  getNonModeratedMessages = () => {
    const url = `${BASE_URL}moderator/`;
    return this.http.get<Messages>(url);
  }

  approveMessage = (id: String) => {
    const url = `${BASE_URL}approve/${id}/`;
    return this.http.get(url);
  }
}
