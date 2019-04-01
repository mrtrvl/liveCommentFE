import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';

import { MessagesService } from './services/messages.service';
import { GeneralService } from './services/general.service';

import {
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
})

export class CustomMaterialModule { }

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
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    NgFlashMessagesModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [
    MessagesService,
    GeneralService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
