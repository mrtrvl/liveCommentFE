import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';

import { MessagesService } from './services/messages.service';

const appRoutes: Routes = [
  { path: 'moderator', component: ModeratorComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: SendmessageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ModeratorComponent,
    SendmessageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [
    MessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
