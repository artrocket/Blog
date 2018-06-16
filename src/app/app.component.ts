import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {title: 'Mon premier Post',
      content: 'Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx ' ,
      loveIts: 0,
      created_at: new Date()},
    {title: 'Mon Deuxieme Post',
      content: 'Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam ' ,
      loveIts: 1,
      created_at: ''},
    {title: 'Mon Troisieme Post',
      content: 'Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam ' ,
      loveIts: 1,
      created_at: ''}
    ];
}

