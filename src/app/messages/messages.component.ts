import { Component, OnInit } from '@angular/core';
import { Messages, Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Messages;

  constructor(
    private messageService: MessagesService,
  ) { }

  ngOnInit() {
    this.getAllMessages();
  }

  getAllMessages = () => {
    this.messageService.getModeratedMessages()
      .subscribe(data => {
        this.messages = data;
        console.log(this.messages);
      });
  }
}
