import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  <h1>Main Component</h1>
  <h1>Message :{{title2}} </h1>
 <child-root Quantity="{{count}}" (childEvent)="childEventHandler($event)" (childEvent2)="childEventHandler2($event)">         
  
  <h3>heading 3 </h3>
  <h3>heading 4 </h3>
<button>click me </button>
<p>rfgisuehg rghidhg hgihslurgu rhglkdfg dfhkkdfhdlfluh sshibbam sifh gekki 
madhu i lobr jdhfbhs hadritu hrihujm</p>

<p> 2 rfgisuehg rghidhg hgihslurgu rhglkdfg dfhkkdfhdlfluh sshibbam sifh gekki 
madhu i lobr jdhfbhs hadritu hrihujm</p>

<p class="para"> 3 rfgisuehg rghidhg hgihslurgu rhglkdfg dfhkkdfhdlfluh sshibbam sifh gekki 
madhu i lobr jdhfbhs hadritu hrihujm</p>


  </child-root>
  <button (click)="count=count+1">Increse Count: {{count}} </button>

  </div>


  `
})
export class AppComponent {
  title = 'steps';
  count:any=0;
  title2:any="";
  childEventHandler(message:any){
    alert("Handling the child event from parent"+message)
  }

  childEventHandler2(message:any){
   // alert(message)
   this.title2=message
  }
}
