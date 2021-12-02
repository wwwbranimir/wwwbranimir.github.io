import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wf-hourly',
  templateUrl: './wf-hourly.component.html',
  styleUrls: ['./wf-hourly.component.css']
})
export class WfHourlyComponent implements OnInit {
  @Input() searchParams: any;
  constructor() { }

  ngOnInit(): void {
  }

}
