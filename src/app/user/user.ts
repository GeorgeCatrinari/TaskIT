import { Component,Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  //@Output() select = new EventEmitter();
  //id = input...
  //avatar = input..
  //name = input..
  select = output<string>(); //same code as @Output, doesnt create a signal, its still an event

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
