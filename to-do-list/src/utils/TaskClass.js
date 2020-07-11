class TaskClass {
  constructor(category, title, done, id) {
    this[id] = {
      category: category,
      title: title,
      done: done
    }
  }
}

// const ejemplo = new TaskClass('Hogar', 'Tarea', true, 'bdhjsjed3a');
// console.log(ejemplo);

module.exports = { TaskClass };
