import { Component, OnInit } from '@angular/core';
import { Messages, Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  messages: Messages;
  dataSource: MatTableDataSource<Message>;
  displayedColumns: string[] = ['sender', 'message', 'approve'];

  constructor(
    private messageService: MessagesService,
  ) { }

  ngOnInit() {
    this.getAllMessages();
  }

  getAllMessages = () => {
    this.messageService.getNonModeratedMessages()
      .subscribe(data => {
        this.messages = data;
        console.log(this.messages.message);
        this.dataSource = new MatTableDataSource(this.messages.message);
        console.log(this.dataSource);
      });
  }

  approveMessage = (id: String) => {
    this.messageService.approveMessage(id)
      .subscribe(data => {
        console.log(data);
        this.getAllMessages();
      });
  }
}
