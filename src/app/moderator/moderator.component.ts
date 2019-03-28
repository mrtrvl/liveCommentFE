import { Component, OnInit, OnDestroy } from '@angular/core';
import { Messages, Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';
import { MatTableDataSource } from '@angular/material';
import { BASE_URL } from '../services/constants';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit, OnDestroy {
  messages: Messages;
  dataSource: MatTableDataSource<Message>;
  displayedColumns: string[] = ['sender', 'message', 'approve'];
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
    this.source.addEventListener('received', message => {
      this.getAllMessages();
    });
    this.source.onmessage = e => {
      console.log(e);
    };
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
