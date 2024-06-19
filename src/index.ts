import { TaskModel } from './taskModel';
import { TaskView } from './taskView';
import { TaskController } from './taskController';

document.addEventListener('DOMContentLoaded', () => {
  const model = new TaskModel();
  const view = new TaskView();
  const controller = new TaskController(model, view);
});
