<template>
  <div>
    <h2>List of tasks</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Task</th> 
          <th colspan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tasks" v-bind:key="item.id">
          <td>{{ item.task }}</td> 
          <td class="deleteLabel" v-on:click="deleteTask(item.id)">DELETE</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {};
  },
  props: {
    tasks: Array
  },
  created() {},
  methods: {
    deleteTask(taskId) {
      this.$emit("deleteTask", taskId);
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.deleteLabel {
  text-decoration: underline;
  font-style: italic;
  color: red;
  cursor: pointer;
}
.editLabel {
  text-decoration: underline;
  font-style: italic;
  color: blue;
  cursor: pointer;
}
</style>
