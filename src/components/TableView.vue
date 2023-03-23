<template>
  <table id="customers">
    <thead>
      <tr>
        <th @click="toggleSort('name')">Имя</th>
        <th @click="toggleSort('phone')">Телефон</th>
      </tr>
    </thead>
    <tbody>
      <TableRow v-if="!row.boss" v-for="row in sortedUsers" :key="row.id" :row="row" />
    </tbody>
  </table>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
    name: "TableView",
    components: [
        TableRow,
    ],
    computed: {
        sortedUsers() {
            return this.$store.getters.sortedUsers;
        }
    },
    methods: {
        toggleSort(name) {
            this.$store.commit("toggleSort", name);
        }
    },
    components: { TableRow }
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
