import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowUpdateName = true;
  userName = '';

  checkUserName() {
    if (typeof(this.userName !== 'undefined' && this.userName)) {
      this.allowUpdateName = false;
    }
  }
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
