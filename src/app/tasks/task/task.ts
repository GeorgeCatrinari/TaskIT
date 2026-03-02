import { TasksService } from './../tasks.service';
import { Component, Input} from '@angular/core';
import { TaskItem } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskItem;
  private tasksService = new TasksService();

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
