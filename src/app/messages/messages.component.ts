import { Component, OnInit, OnDestroy } from '@angular/core';
import { Messages, Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';
import { MatTableDataSource } from '@angular/material';
import { BASE_URL } from '../services/constants';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  messages: Messages;
  dataSource: MatTableDataSource<Message>;
  displayedColumns: string[] = ['sender', 'message'];
  source: any;

  constructor(
    private messageService: MessagesService,
  ) {
    this.connect();
  }

  ngOnInit() {
    this.getAllMessages();
  }

  ngOnDestroy() {
    this.source.close();
  }

  connect = (): void => {
    this.source = new EventSource(`${BASE_URL}events/`);
    this.source.addEventListener('approved', message => {
      this.getAllMessages();
    });
    this.source.onmessage = e => {
      console.log(e);
    };
  }

  getAllMessages = () => {
    this.messageService.getModeratedMessages()
      .subscribe(data => {
        this.messages = data;
        this.dataSource = new MatTableDataSource(this.messages.message);
      });
  }
}
