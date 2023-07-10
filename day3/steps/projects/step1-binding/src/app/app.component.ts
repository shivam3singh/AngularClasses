import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  template:
  `
   <div>
   <h2>Binding in Angular</h2>
   <h3>Title:{{title}}</h3>
   <h2>length of tile: {{title.length}}</h2>

<fieldset>
<legend>
<h3>Attribute binding</h3>
</legend>
<h2 [innerHTML]="title"></h2>
<h2 [textContent]="title"></h2>
<h2 [innerText]="title"></h2>
</fieldset>

<fieldset>
<legend>
<h3>Property binding</h3>
</legend>
<h2 bind-innerHTML="title"></h2>
<h2 bind-textContent="title"></h2>
<h2 innerText="{{title}}"></h2>
</fieldset>

<fieldset>
<legend>
<h3>Value binding</h3>
</legend>
<input type="text" [value]="title">
<input [type]="type">
</fieldset>


<fieldset>
<legend>
<h3>Event binding</h3>
</legend>
<input #ti type="text">
<button (click)= Clickhandlet(ti.value)>Click me</button>
<hr>
<input #numip type="number" [value]="count" (input)="count = numip.value">
      <br>
<h2>count is:{{count}}</h2>

<hr>

</fieldset>


   </div>
  
  `
 
})
export class AppComponent {
  title = 'step1-binding';
  type="color";

   Clickhandlet(msz:string) {
    alert(msz);
   
  }
  count:any=5;

}
