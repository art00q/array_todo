const STATUSES = ['TODO', 'DONE', 'IN PROGRESS'];

const list = [
  {
    id: 1,
    name: 'create a post',
    status: 'TODO',
    priority: 'low',
  },
  {
    id: 2,
    name: 'test',
    status: 'DONE',
    priority: 'high',
  }
];

function changeStatus(task, status) {
  const isGivenStatusNotAvailable = !STATUSES.includes(status);

  if (isGivenStatusNotAvailable) {
    return null
  }

  list.forEach((_task) => {
    const isTaskFound = _task.name === task;

    if (isTaskFound) {
      _task.status = status;
    }
  })
}

function addTask() {

}

function deleteTask() {

}
