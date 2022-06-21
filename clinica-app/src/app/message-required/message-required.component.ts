import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-required',
  templateUrl: './message-required.component.html',
  styleUrls: ['./message-required.component.css']
})
export class MessageRequiredComponent  {

  @Input() text = '';



}
