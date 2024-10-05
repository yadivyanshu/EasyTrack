import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avtar!: String;
  @Input() name!: String;

  get imagePath() {
    return 'assets/users/' + this.avtar;
  }

  onSelectUser() {
    console.log('Clicked!');
  }
}
