import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-logo',
  templateUrl: './grid-logo.component.html',
  styleUrls: ['./grid-logo.component.css']
})
export class GridLogoComponent implements OnInit {
  @Input() public photo: string;
  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

}
