import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-one-level-four',
  templateUrl: './screen-one-level-four.component.html',
  styleUrls: ['./screen-one-level-four.component.css']
})
export class ScreenOneLevelFourComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
