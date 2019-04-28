import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteText {
      color: white;
    }
  `]
})
export class AppComponent {
  showText = false;
  textToDisplay = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet";
  logs = [];

  onShowText(){
    this.showText = true;
    this.logs.push(this.logs.length + 1);

  }
}
