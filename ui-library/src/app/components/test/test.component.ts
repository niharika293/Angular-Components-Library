import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  iconPath : string = "../../../assets/upload_24px.png";

  constructor() { }

  ngOnInit(): void {
  }

}
