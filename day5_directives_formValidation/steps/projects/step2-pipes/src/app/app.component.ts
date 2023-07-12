import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h2>Pipes in Angular</h2>
  </div>
  <h2>Inbuilt Pipes</h2>
<hr>

<div class="container">

<table class="table table-striped table-hover table-responsive">
<thead class="table-dark table-sm ">
  <tr>
    <th>title</th>
    <th>year</th>
    <th>type</th>
    <th>poster</th>
  </tr>
</thead>
<tbody>
  <tr *ngFor="let hero of heroes">
    <td>{{hero.Title | uppercase}}  </td>
    <td>
    <button class="btn btn-primary"> {{hero.Year|date:'short'}}</button>

   </td>
    <td>{{hero.Type}}</td>
    <td>
    <img [src]= "hero.Poster" [alt]="hero.Title" width="50px">  
     
    
    </td>
  </tr>
</tbody>
</table>

<div *ngFor =" let item of heroes[0] | keyvalue"> {{item.key}}:{{item.value}}</div>
  
</div>





  `,
  styles: []
})
export class AppComponent {
  title = 'step2-pipes';
  heroes=[{"Title":"Thor","Year":"2011","imdbID":"tt0800369","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},{"Title":"Thor: Ragnarok","Year":"2017","imdbID":"tt3501632","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"},{"Title":"Thor: The Dark World","Year":"2013","imdbID":"tt1981115","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"},
  {"Title":"Thor: Love and Thunder","Year":"2022","imdbID":"tt10648342","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"},
  {"Title":"Team Thor","Year":"2016","imdbID":"tt6016776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Thor: Tales of Asgard","Year":"2011","imdbID":"tt1667903","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg"},{"Title":"Team Thor: Part 2","Year":"2017","imdbID":"tt6599818","Type":"movie",
  "Poster":"https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Valhalla - The Legend of Thor","Year":"2019","imdbID":"tt8956872","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTA0OGZjODctYjg2ZS00YWQ1LWEyZjgtMDZkNmYyZDAwYzg0XkEyXkFqcGdeQXVyMzcwNjA5Mzg@._V1_SX300.jpg"},
  {"Title":"Almighty Thor","Year":"2011","imdbID":"tt1792794","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg"},{"Title":"Thor: Finding Korg","Year":"2018","imdbID":"tt8513006","Type":"movie",
  "Poster":"https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg"}];




}
