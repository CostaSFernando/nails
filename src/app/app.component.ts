import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nails';

  ngOnInit() {
    window.addEventListener('scroll', () => {
      let header = document.querySelector('.header');
      if ( window.pageYOffset ) {
        header?.classList.add('h-black');
        return;
      }
      header?.classList.remove('h-black');


    })

  }
}
