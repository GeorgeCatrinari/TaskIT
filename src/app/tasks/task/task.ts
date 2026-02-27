import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItem } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskItem
  @Output() complete = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
