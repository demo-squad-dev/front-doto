const SERVER_URL = 'http://localhost:3000';

function getTasks () {
  return fetch(`${SERVER_URL}/tasks`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      return data;
    });
}

function addTask (task) {
  return fetch(`${SERVER_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
}

function deleteTask (taskId) {
  return fetch(`${SERVER_URL}/tasks/${taskId}`, {
    method: 'DELETE'
  });
}

export { getTasks, addTask, deleteTask };
