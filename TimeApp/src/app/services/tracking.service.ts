
export class TimeTrackingService {

    website:string = "";
    websiteStoredTime = "";
    username = localStorage.getItem("CURRENT_USER") || "";
    jsonTimes = JSON.parse(localStorage.getItem(this.username) || "{}");
    //startTime = this.jsonTimes[this.webSiteStoredTime];
    elapsedTime = this.jsonTimes[this.website];
    startTime:number = 0; //this.jsonTimes[this.website];
    // elapsedTime:number = 0;
    storedStartTime: number = 0;
    intervalId: any;


    constructor(private webSite: string, private webSiteStoredTime: string){
        this.website = webSite;
        this.webSiteStoredTime = webSiteStoredTime;
    }

    getCurrentUser() {
        return this.username;
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
        this.jsonTimes[this.webSite] = this.elapsedTime;
        localStorage.setItem(this.username, JSON.stringify(this.jsonTimes));
      }


}