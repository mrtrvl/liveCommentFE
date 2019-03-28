import { Component, OnInit, OnDestroy } from '@angular/core';
import { Messages, Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';
import { MatTableDataSource } from '@angular/material';
import { BASE_URL } from '../services/constants';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit, OnDestroy {
  messages: Messages;
  dataSource: MatTableDataSource<Message>;
  displayedColumns: string[] = ['sender', 'message', 'approve', 'delete'];
  source: any;

  constructor(
    private messageService: MessagesService,
    private generalService: GeneralService,
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
  }


  getAllMessages = () => {
    this.messageService.getNonModeratedMessages()
      .subscribe(data => {
        this.messages = data;
        this.dataSource = new MatTableDataSource(this.messages.message);
      });
  }

  approveMessage = (id: String) => {
    this.messageService.approveMessage(id)
      .subscribe(data => {
        this.generalService.showFlashMessage(data);
        this.getAllMessages();
      });
  }

  deleteMessage = (id: String) => {
    this.messageService.deleteMessage(id)
      .subscribe(data => {
        this.generalService.showFlashMessage(data);
        this.getAllMessages();
      });
  }
}
