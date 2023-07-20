import { Component, OnDestroy, OnInit } from '@angular/core';

const WEB_SITE_NAME :string = "TIME_ABOUT";
const WEB_SITE_START_TIME = "START_TIME_ABOUT";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{
  username = localStorage.getItem("CURRENT_USER") || '';
  jsonTimes = JSON.parse(localStorage.getItem(this.username)|| "{}");
  elapsedTime = this.jsonTimes[WEB_SITE_NAME];
  startTime: number = 0;
  intervalId :any;
  timeTracker :any

  constructor(){
  }

  ngOnInit(): void {
    this.startTrackingTime();
  }

  ngOnDestroy(): void {
    this.stopTrackingTime();
  }

  startTrackingTime(){
    this.startTime = Math.floor(Date.now() / 1000);
    if (this.elapsedTime > 0) {
        this.startTime -= this.elapsedTime;
    }
    this.intervalId = setInterval(() => {
        this.updateElapsedTime();
      }, 1000);
  }

  stopTrackingTime(){
      this.updateElapsedTime();
      clearInterval(this.intervalId);
  }

  updateElapsedTime() {
      const currentTime = Math.floor(Date.now() / 1000);
      this.elapsedTime = (currentTime - this.startTime);
      this.jsonTimes[WEB_SITE_NAME] = this.elapsedTime;
      localStorage.setItem(this.username, JSON.stringify(this.jsonTimes));
  }
}
