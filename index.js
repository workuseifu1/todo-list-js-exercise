
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markComplete: function () {
      this.complete = true;
    }
  };
  return task;
}
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
for (let i = 0; i < tasks.length; i++) {
  if(tasks[i]) {
    tasks[i].logState();
    tasks[i].markComplete();
    tasks[i].logState();
  }
}


