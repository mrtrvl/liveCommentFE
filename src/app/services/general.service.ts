import { Injectable } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private ngFlashMessageService: NgFlashMessageService
  ) { }

  showFlashMessage = (message: any) => {
    this.ngFlashMessageService.showFlashMessage({
      messages: [message.message],
      dismissible: true,
      timeout: 4000,
      type: message.success ? 'success' : 'danger'
    });
  }
}
