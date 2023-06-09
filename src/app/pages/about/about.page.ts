import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  imageUrl:string='../assets/me.png'
  constructor() { }

  ngOnInit() {
  }

}
