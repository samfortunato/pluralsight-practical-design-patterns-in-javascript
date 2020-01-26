const Task = require('./task');
const TaskRepository = require('./task-repository');

const taskOne = new Task(TaskRepository.getTask(1));

taskOne.complete();
taskOne.save();
