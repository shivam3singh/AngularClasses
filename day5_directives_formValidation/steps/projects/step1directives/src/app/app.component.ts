import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <div>
<h1>learn directives and angular</h1>

</div>
<h2>*ngFor directives</h2>

  
<hr>
<div>
<p *ngFor="let hero of avengers ; index as idx ; first as fst">{{idx}}-<span *ngIf="fst">First Avenger: </span>
 {{hero}}</p>
</div>

<ng-template ngFor let-hero [ngForOf]="avengers">
{{hero}}
 </ng-template>
<hr>
<h2>*ngSwitch Case</h2>

<input #rng type="range" min="1" max="5" [value]="rating" (input)="rating=rng.value"/>{{rating}}
 <div [ngSwitch]="rating">
 <h3 *ngSwitchCase="1">*</h3>
 <h3 *ngSwitchCase="2">**</h3>
 <h3 *ngSwitchCase="3">***</h3>
 <h3 *ngSwitchCase="4">****</h3>
 <h3 *ngSwitch Default>not rated</h3>
 </div>

 <hr>
 <div>
<h2>*ngNonBindable </h2>
<div ngNonBindable>
{{hello Masai}}
</div>

<hr>


<h2>NgStyleDirective</h2>

<p [style]="styleprop">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Illo optio quae ipsum natus? Perspiciatis animi officia cupiditate 
  perferendis beatae corporis nisi est quibusdam blanditiis et, fugit dicta illo odio doloremque.</p>

  <p [ngStyle]="{'color':'grey'}">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Illo optio quae ipsum natus? Perspiciatis animi officia cupiditate 
  perferendis beatae corporis nisi est quibusdam blanditiis et, fugit dicta illo odio doloremque.</p>

  <p [ngStyle]="{'color': rating>2 ? 'grey':'red'}">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Illo optio quae ipsum natus? Perspiciatis animi officia cupiditate 
  perferendis beatae corporis nisi est quibusdam blanditiis et, fugit dicta illo odio doloremque.</p>

  <hr>
<div>
<h2>NgClassDirective</h2>

<p [ngClass]="{redbox:rating>2 , bluebox:rating<2 }">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
Illo optio quae ipsum natus? Perspiciatis animi officia cupiditate 
perferendis beatae corporis nisi est quibusdam blanditiis et, fugit dicta illo odio doloremque.</p>

</div>

 
  `,
  styles: [
`
    .redbox{
      height:100px;
      color:red
    }

.bluebox{
  color:yellow
}

    `
  ]
})
export class AppComponent {
  title = 'step1directives';
  avengers=["Ironman","SpiderMan","CaptainAmerica","Thor","BlackWidow","Hulk","Groot","AntMan"]
  //if we dont use any div or li we use ng template
  rating:any=1;
  styleprop="padding: 10px  ;background-color: aqua;";

}
