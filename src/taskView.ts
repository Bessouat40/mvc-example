import { Task } from './task';

export class TaskView {
  private app: HTMLElement;
  private taskList: HTMLElement;
  private taskInput: HTMLInputElement;
  private taskButton: HTMLButtonElement;
  private toggleTaskCallback: (id: number) => void;

  constructor() {
    this.app = document.getElementById('app')!;
    this.taskList = document.createElement('ul');
    this.taskInput = document.createElement('input');
    this.taskButton = document.createElement('button');
    this.taskButton.textContent = 'Add Task';

    this.app.appendChild(this.taskInput);
    this.app.appendChild(this.taskButton);
    this.app.appendChild(this.taskList);

    // Initialiser la méthode onToggleTaskCallback à une fonction vide pour éviter les erreurs.
    this.toggleTaskCallback = () => {};
  }

  getTaskTitle(): string {
    return this.taskInput.value;
  }

  clearTaskInput(): void {
    this.taskInput.value = '';
  }

  displayTasks(tasks: Task[]): void {
    while (this.taskList.firstChild) {
      this.taskList.removeChild(this.taskList.firstChild);
    }

    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.textContent = `${task.title} ${task.completed ? '(Completed)' : ''}`;
      li.addEventListener('click', () => this.toggleTaskCallback(task.id));
      this.taskList.appendChild(li);
    });
  }

  onAddTask(callback: () => void): void {
    this.taskButton.addEventListener('click', callback);
  }

  onToggleTask(callback: (id: number) => void): void {
    this.toggleTaskCallback = callback;
  }
}
