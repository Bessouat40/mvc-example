import { Task } from '../task';

export class TaskModel {
  private tasks: Task[] = [];
  private nextId: number = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const task = new Task(this.nextId++, title);
    this.tasks.push(task);
  }

  toggleTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
