
import { officeService } from '../office.service';

import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';


@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {
  @Input() public offices: Array<any> = [];

  constructor(private officeService: officeService) { }

  public ngOnInit(): void {
    console.log('OfficeListCompoent');
    this.getOffices();
  }

  public getOffices(): void {
    this.officeService.getOfficeInfo().subscribe((offices: any[]) =>
      this.offices = offices, (error) => console.log(error));
  
 
  }
}  


