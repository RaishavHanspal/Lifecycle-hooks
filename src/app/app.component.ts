import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
  title = 'all-hooks';
  hooksArray: Array<string> = [];
  name: string;
  constructor(private _service:SimpleService){}
  ngOnChanges(changes){console.log('AppComponent','ngOnChanges', changes); this.hooksArray.push('AppComponent-ngOnChanges');}
  ngOnInit(){console.log('AppComponent','ngOnInit');  this.hooksArray.push('AppComponent-ngOnInit');}
  ngDoCheck(){console.log('AppComponent','ngDoCheck');  this.hooksArray.push('AppComponent-ngDoCheck');}
  ngAfterContentInit(){console.log('AppComponent','ngAfterContentInit');  this.hooksArray.push('AppComponent-ngAfterContentInit');}
  ngAfterContentChecked(){console.log('AppComponent','ngAfterContentChecked');  this.hooksArray.push('AppComponent-ngAfterContentChecked');}
  ngAfterViewInit(){console.log('AppComponent','ngAfterViewInit');  this.hooksArray.push('AppComponent-ngAfterViewInit');}
  ngAfterViewChecked(){console.log('AppComponent','ngAfterViewChecked');  this.hooksArray.push('AppComponent-ngAfterViewChecked');}
  ngOnDestroy(){console.log('AppComponent','ngOnDestroy');  this.hooksArray.push('AppComponent-ngOnDestroy');}
  OtherName(event){
    console.log('event',event)
    switch (event) {
      // case "clearAll":
      //   this.hooksArray = [];
      //   break;
      case "hide-DoCheck":
        this.hooksArray = this.hooksArray.filter(hook => !hook.includes('ngDoCheck'));
        break;
      default:
        this.hooksArray.push(event);
        break;
    }
  }
}
