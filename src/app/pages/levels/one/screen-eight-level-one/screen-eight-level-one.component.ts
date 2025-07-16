import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-eight-level-one',
  templateUrl: './screen-eight-level-one.component.html',
  styleUrls: ['./screen-eight-level-one.component.css']
})
export class ScreenEightLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
