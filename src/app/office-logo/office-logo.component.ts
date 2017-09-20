import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-office-logo',
  templateUrl: './office-logo.component.html',
  styleUrls: ['./office-logo.component.css']
})
export class OfficeLogoComponent implements OnInit {

  @Input() public photo: string;
  @Input() public name: string;

  constructor() { }

  public ngOnInit(): void {
    console.log('OfficeListCompoent');
  }

}
