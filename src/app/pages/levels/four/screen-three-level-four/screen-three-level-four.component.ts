import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-three-level-four',
  templateUrl: './screen-three-level-four.component.html',
  styleUrls: ['./screen-three-level-four.component.css']
})
export class ScreenThreeLevelFourComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
