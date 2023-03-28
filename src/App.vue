<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoForm  v-on:addTask="addTask" />
    <TodoList
      :tasks="tasks" 
      v-on:deleteTask="deleteTask"
    />
    
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import {
  getTasks,
  addTask,  
  deleteTask
} from "./services/todo";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      tasks: [],
      taskToEdit: null, 
    };
  },
  async created() {
    const tasks = await getTasks();
    this.tasks = [...tasks];
  },
  methods: {
    randomKey() {
      return Math.random();
    },
    addTask(task) {
      addTask(task)
        .then(resp => resp.json())
        .then(taskObject => {
          this.tasks = [...this.tasks, {...taskObject}];
        })
        .catch(err => {
          console.log(err);
        });
    },
     
    
    deleteTask(id) {
      deleteTask(id).then(() => {
        const indexOfTaskToDelete = this.tasks.findIndex(
          task => task.id === id
        );
        this.tasks.splice(indexOfTaskToDelete, 1);
      });
    }
  }
};
</script>

<style>
#app {
  width: 80%;
  margin: auto;
}
</style>
