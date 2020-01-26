const TaskRepository = function() {

  const database = {
    1: { id: 1, name: 'DB task name' },
  };

  const getTask = function(id) {
    console.log(`Getting task ${id}...`);
    return database[id];
  };

  const saveTask = function(task) {
    console.log(`Saving task "${task.name}" to the database...`);
  };

  return {
    getTask,
    saveTask
  };

};

module.exports = TaskRepository();
