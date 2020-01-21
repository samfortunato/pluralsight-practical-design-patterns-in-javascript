// // var obj = {};
// // var objCreate = Object.create(Object.prototype);

// $01_creatng_objects: {
//   const obj = {};

//   const objCreate = Object.create(Object.prototype);

//   const objNew = new Object();
// }

// // --

// $02_reading_and_writing_attributes: {
//   const obj = {};
//   const prop = 'prop';

//   obj[prop] = 'val';
//   console.log(obj[prop]);
//   // => "val"
// }

// const task = new Object();

// task.title = 'task';
// task.description = 'description';
// task.toString = function() {
//   return `${this.title} ${this.description}`;
// };

// console.log(task.title);
// console.log(task.toString());

// --

{
  const task = { title: 'title', description: 'description' };

  Object.defineProperty(task, 'toString', {
    value: function() { return `${this.title} ${this.description}`; },
    writable: false,
    enumerable: false,
    configurable: false,
  });

  // task.toString = 'wont work, cause `toString` is not writable';
  // console.log(task.toString());
  // console.log(task.toString);

  // console.log(task);
  // console.log(Object.keys(task));

  // Object.defineProperty(task, 'toString', { enumerable: true });
  // console.log(task);
  // Object.defineProperty(task, 'toString', { enumerable: false });
  // console.log(task);

  // Object.defineProperty(task, 'toString', { configurable: false });
  // console.log(task);

  // will throw, because you set the property to be NOT configurable
  // Object.defineProperty(task, 'toString', { enumerable: true });

  // will also throw
  // Object.defineProperty(task, 'toString', { configurable: true });
  // Object.defineProperty(task, 'toString', { enumerable: true });
  // console.log(task);

  const urgentTask = Object.create(task);
  console.log(urgentTask);
  console.log(Object.keys(urgentTask));

  Object.defineProperty(urgentTask, 'toString', {
    value: function() { return `${this.title} is urgent`; },
    writable: false,
    enumerable: false,
    configurable: false,
  });

  console.log(urgentTask.toString());
}
