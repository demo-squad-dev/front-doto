<template>
  <div>
    <h2>{{editMode ? 'Edit task' : 'New task'}}</h2>
    <label for="taskInput">Name of task</label>
    <input v-model="task" type="text" id="taskInput" />
    
    <button v-on:click="submitForm">{{editMode ? 'EDIT' : 'ADD'}}</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      task: null
    };
  },
  props: {
    editMode: Boolean,
    taskToEdit: Object
  },
  created() { 
  },
  watch: {
    taskToEdit: function(currenttaskToEdit) {
      console.log('watch',this.editMode);
      this.task = currenttaskToEdit.task; 
    }
  },
  methods: {
    submitForm() {
      this.$emit(this.editMode ? "editTask" : "addTask", {
        id: this.taskToEdit ? this.taskToEdit.id : undefined,
        task: this.task
      });
      this.task = null; 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label,
input {
  display: block;
  margin-bottom: 10px;
}
</style>
