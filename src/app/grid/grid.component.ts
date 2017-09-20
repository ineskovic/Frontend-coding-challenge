import { officeService } from '../office.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

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
