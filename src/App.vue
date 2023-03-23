<template>
  <div id="app">
    <div class="pageContainer">
      <AddNewUserForm />
      <TableView />
    </div>
  </div>
</template>

<script>
import TableView from "./components/TableView";
import AddNewUserForm from "./components/AddNewUserForm.vue";

export default {
  name: "App",
  components: {
    TableView,
    AddNewUserForm
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
.pageContainer {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
