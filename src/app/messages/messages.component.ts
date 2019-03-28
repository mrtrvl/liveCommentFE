import { Component, OnInit } from '@angular/core';
import { Messages, Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Messages;
  dataSource: MatTableDataSource<Message>;
  displayedColumns: string[] = ['sender', 'message'];

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
        this.dataSource = new MatTableDataSource(this.messages.message);
      });
  }
}
