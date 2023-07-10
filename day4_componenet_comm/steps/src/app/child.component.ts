import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
selector:"child-root",
//inputs:["Quantity"],               //importabt if we want to expose the value to parent 
                                       //sending information to parent
template:`
<div style="border: 1px solid red;">
  <h2>Child Component</h2>
  <ng-content select="h3"></ng-content>
  <hr>
  <ng-content select =".para"></ng-content>
  <hr>
  <ng-content></ng-content>
  <h3>Quantity : {{Quantity}}</h3>
  <button (click)="clickHandler()">Click me</button>
<input #ti type="text">
  <button (click)="clickHandler2(ti.value)">Click me to set meassage in parent</button>
  </div>

`
//nested child cannot be selected only direct root tags can be selected(filtered..)
})
export class ChildComp{
title=" titlt is: Steps in child "
@Input() Quantity:any=0;                  //sending information to parent
@Output() childEvent:EventEmitter<any>=new EventEmitter();
@Output() childEvent2:EventEmitter<any>=new EventEmitter();
clickHandler(){
this.childEvent.emit(this.title);
}
clickHandler2(msz:any){
  this.childEvent2.emit(msz);
  }

}



