import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signup';

  show(fn:any,p:any){

    console.log(fn);
    console.log(p)
    

  }
}
