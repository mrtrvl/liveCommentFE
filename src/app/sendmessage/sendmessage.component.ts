import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Message } from '../interfaces/message.interface';
import { MessagesService } from '../services/messages.service';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {
  message: Message;

  messageForm = new FormGroup({
    sender: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  constructor(
    private messagesService: MessagesService,
    private generalService: GeneralService,
  ) { }

  ngOnInit() {
  }

  sendMessage () {
    if (this.messageForm.valid) {
      this.messagesService.sendMessage(this.messageForm.value)
        .subscribe(data => {
          console.log(data);
          this.generalService.showFlashMessage(data);
          this.messageForm.reset();
        });
    }
  }
}
