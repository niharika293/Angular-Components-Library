import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  @Input() icon :any;
  @Input() text : any;
  @Input() color!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
