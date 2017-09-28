import { Component, Input, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public zoom: number = 2;

  public markers: Array<any> = [
    {
      name: 'Belgrade Office',
      lat: 44.786568,
      lng: 20.4489216,
      desc: 'Itekako Belgrade office address is Terazije 23'
    },
    {
      name: 'Paris Office',
      lat: 48.856614,
      lng: 2.3522219,
      desc: 'Itekako Paris office address is Main street'
    },
    {
      name: 'Oslo Office',
      lat: 59.911491,
      lng: 10.757933,
      desc: 'Itekako Oslo office address is Maine street'
    },
    {
      name: 'Berlin Office',
      lat: 52.5200066,
      lng: 13.404954,
      desc: 'Der Standardteil von Lorem Ipsum, genutzt seit 1500, ist reproduziert für die, die es interessiert. '
    },
    {
      name: 'Stockholm Office',
      lat: 59.3293235,
      lng: 18.0685808,
      desc: 'Itekako Stockholm office address is Maine street. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
    },
    {
      name: 'Banjaluka Office',
      lat: 44.7721811,
      lng: 17.191,
      desc: 'Itekako Banjaluka office address is Maine street'
    },
    {
      name: 'Rio de Janeiro Office',
      lat: -22.9068467,
      lng: -43.1728965,
      desc: 'Rio de Janeiro office address is Janeiro street'
    },
    {
      name: 'San Diego Janeiro Office',
      lat: 32.715738,
      lng: -117.1610838,
      desc: 'San Diego office address is Diego street.'
    },
    {
      name: 'Kapstadt Office',
      lat: -33.9248685,
      lng: 18.4240553,
      desc: 'Kapstadt office address is Kapstadt 2355 street.'
    },
    {
      name: 'Tokio Office',
      lat: 35.6894875,
      lng: 139.6917064,
      desc: 'Tokio office address is Tokio street.'
    },
    {
      name: 'Moscow Office',
      lat: 55.755826,
      lng: 37.6173,
      desc: 'Moscow office address is Putin street.'
    },
    {
      name: 'Copenhagen Office',
      lat: 55.6760968,
      lng: 12.5683371,
      desc: 'Copenhagen office address is Valby street. I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst.'
    },
  ];
  constructor() { }

   ngOnInit() {}

  }