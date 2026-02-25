import { Component,Input, Output, EventEmitter} from '@angular/core';

interface UserItem {
    id : string;
    name : string;
    avatar: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required : true}) user!: UserItem;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
