<template>
  <div id="app">
    <TableView />
    <AddNewUserForm />
  </div>
</template>

<script>
import TableView from './components/TableView';
import AddNewUserForm from './components/AddNewUserForm.vue';

export default {
  name: 'App',
  components: {
    TableView,
    AddNewUserForm,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
