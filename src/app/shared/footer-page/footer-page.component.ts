import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  public dateNow: string;

  constructor() { }

  ngOnInit(): void {
    this.dateNow = this.getDateNow();
  }

  public getDateNow(): string {
    let now = new Date();
    var dataString = now.toISOString()
    var adjustDate = dataString.slice(0, 4);
    return adjustDate;
  }
}
