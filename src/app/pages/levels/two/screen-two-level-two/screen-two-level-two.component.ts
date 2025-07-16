import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/service/messages/messages.service';

@Component({
  selector: 'app-screen-two-level-two',
  templateUrl: './screen-two-level-two.component.html',
  styleUrls: ['./screen-two-level-two.component.css']
})
export class ScreenTwoLevelTwoComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
