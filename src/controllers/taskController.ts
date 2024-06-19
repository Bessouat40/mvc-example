import { TaskModel } from '../models/taskModel';
import { TaskView } from '../views/taskView';

export class TaskController {
  private model: TaskModel;
  private view: TaskView;

  constructor(model: TaskModel, view: TaskView) {
    this.model = model;
    this.view = view;

    this.view.onAddTask(this.handleAddTask);
    this.view.onToggleTask(this.handleToggleTask);

    this.displayTasks();
  }

  handleAddTask = (): void => {
    const title = this.view.getTaskTitle();
    if (title) {
      this.model.addTask(title);
      this.view.clearTaskInput();
      this.displayTasks();
    }
  };

  handleToggleTask = (id: number): void => {
    this.model.toggleTask(id);
    this.displayTasks();
  };

  displayTasks(): void {
    const tasks = this.model.getTasks();
    this.view.displayTasks(tasks);
  }
}
