import { Component, computed, signal, Input, input } from '@angular/core';
//input - signals
//Input - no signals


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() =>{
     return 'assets/users/' + this.avatar();
  });

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }


  onSelectUser(){
  }
}
