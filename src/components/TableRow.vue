<template>
  <div>
    <div class="row">
      <div class="cell firstCell">
        <button v-if="children.length" @click="isShown = !isShown">
          {{ isShown ? '-' : '+' }}
        </button>
        <div class="cellContent">{{ row.name }}</div>
      </div>
      <div class="cell secondCell">
        <div class="cellContent">{{ row.phone }}</div>
      </div>
    </div>
    <table-row class="recursiveRow" v-if="isShown" v-for="child in children" :key="child.id" :row="child" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShown: false,
    }
  },
  props: ["row"],
  computed: {
    children() {
      return this.$store.getters.getChildren(this.row.id);
    }
  }
};
</script>

<style scoped>
.table {
  display: flex;
}
.row {
  display: flex;
  justify-content: flex-end;
}

.cell {
  display: flex;
  align-items: center;
  border: 1px solid gray;
  text-align: left;
  padding: 10px;
}
.firstCell {
  flex-shrink: 1;
  width: 100%;
}
.secondCell {
  min-width: 350px;
}
.recursiveRow {
  margin-left: 40px;
}
.cellContent {
  margin-left: 15px;
}
</style>
