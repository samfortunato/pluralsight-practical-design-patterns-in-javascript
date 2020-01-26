const TaskRepository = require('./task-repository');

class Task {
  constructor(taskData) {
    this.name = taskData.name;
    this.completed = false;
  }

  complete() {
    this.completed = true;
    console.log(`Task "${this.name}" completed`);
  }

  save() {
    TaskRepository.saveTask(this);
  }
}

module.exports = Task;
