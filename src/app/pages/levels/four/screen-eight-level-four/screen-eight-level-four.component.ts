import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-eight-level-four',
  templateUrl: './screen-eight-level-four.component.html',
  styleUrls: ['./screen-eight-level-four.component.css']
})
export class ScreenEightLevelFourComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
