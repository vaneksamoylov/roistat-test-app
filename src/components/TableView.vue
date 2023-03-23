<template>
  <section>
    <header class="header">
      <div class="header-title" @click="toggleSort('name')">Имя</div>
      <div class="header-title" @click="toggleSort('phone')">Телефон</div>
    </header>
    <main class="main">
      <TableRow
        v-if="!row.boss"
        v-for="row in sortedUsers"
        :key="row.id"
        :row="row"
      />
    </main>
  </section>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
  name: "TableView",
  components: [TableRow],
  computed: {
    sortedUsers() {
      return this.$store.getters.sortedUsers;
    },
  },
  methods: {
    toggleSort(name) {
      this.$store.commit('toggleSort', name);
    },
  },
  components: { TableRow },
};
</script>

<style scoped>
.header {
  display: flex;
  width: fit-content;
}

.header-title {
  border: 1px solid black;
  cursor: pointer;
  width: 350px;
  padding: 10px 0;
  background-color: antiquewhite;
}
.main {
  border: 1px solid brown;
  max-width: 700px;
}
</style>
