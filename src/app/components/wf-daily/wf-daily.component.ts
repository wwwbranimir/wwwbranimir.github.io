import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wf-daily',
  templateUrl: './wf-daily.component.html',
  styleUrls: ['./wf-daily.component.css']
})
export class WfDailyComponent implements OnInit {
  ngOnInit(): void {
}
  @Input() searchParams: any;
}
