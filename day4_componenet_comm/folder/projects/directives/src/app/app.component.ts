import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <label for="terms">Show Term and Condition</label>

  <input id="terms" type="checkbox" (click)="show=!show">
  <fieldset *ngIf="show">
 
  <legend>Terms and Condition</legend>
  <hr>
  <p>!st COndition</p>
  <p>2rd COndition</p>
  <p>3rd COndition</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Nam voluptas voluptates quasi dolor blanditiis corrupti eligendi inventore.
    Aperiam eos, optio provident quos, in totam animi facilis sint unde nihil enim!</p>
    </fieldset>
    <ng-template [ngIf]="!show" >{{title}}</ng-template>
    <hr>
    <ol>
    <li *ngFor="let hero of avengers">{{hero}}</li>
    </ol>

  `,
  styles: []              //ng-template|
})
export class AppComponent {
  title = 'directives';
  show=false;
  avengers=["Ironman","SpiderMan","CaptainAmerica","Thor","BlackWidow","Hulk","Groot","AntMan"]
  
  }

