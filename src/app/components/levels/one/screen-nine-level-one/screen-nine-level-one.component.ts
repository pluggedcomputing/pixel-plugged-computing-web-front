import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-nine-level-one',
  templateUrl: './screen-nine-level-one.component.html',
  styleUrls: ['./screen-nine-level-one.component.css']
})
export class ScreenNineLevelOneComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
