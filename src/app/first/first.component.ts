import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
  @Input() Name: string; 
  @Output() OtherName : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnChanges(changes){console.log('FirstComponent','ngOnChanges', changes); this.OtherName.emit('FirstComponent-ngOnChanges');}
  ngOnInit(){console.log('FirstComponent','ngOnInit');  this.OtherName.emit('FirstComponent-ngOnInit');}
  ngDoCheck(){console.log('FirstComponent','ngDoCheck');  this.OtherName.emit('FirstComponent-ngDoCheck');}
  ngAfterContentInit(){console.log('FirstComponent','ngAfterContentInit');  this.OtherName.emit('FirstComponent-ngAfterContentInit');}
  ngAfterContentChecked(){console.log('FirstComponent','ngAfterContentChecked');  this.OtherName.emit('FirstComponent-ngAfterContentChecked');}
  ngAfterViewInit(){console.log('FirstComponent','ngAfterViewInit');  this.OtherName.emit('FirstComponent-ngAfterViewInit');}
  ngAfterViewChecked(){console.log('FirstComponent','ngAfterViewChecked');  this.OtherName.emit('FirstComponent-ngAfterViewChecked');}
  ngOnDestroy(){console.log('FirstComponent','ngOnDestroy');  this.OtherName.emit('FirstComponent-ngOnDestroy');}
  hideDoCheck(){
    this.OtherName.emit('hide-DoCheck');
  }
}
