import { TaskModel } from './models/taskModel';
import { TaskView } from './views/taskView';
import { TaskController } from './controllers/taskController';

document.addEventListener('DOMContentLoaded', () => {
  const model = new TaskModel();
  const view = new TaskView();
  const controller = new TaskController(model, view);
});
