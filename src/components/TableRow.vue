<template>
  <div>
    <div class="row">
      <div class="cell first-cell">
        <button v-if="children.length" @click="isShown = !isShown">
          {{ isShown ? "-" : "+" }}
        </button>
        <div class="cell-content">{{ row.name }}</div>
      </div>
      <div class="cell second-cell">
        <div class="cell-content">{{ row.phone }}</div>
      </div>
    </div>
    <table-row
      class="recursive-row"
      v-if="isShown"
      v-for="child in children"
      :key="child.id"
      :row="child"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
  props: ["row"],
  computed: {
    children() {
      return this.$store.getters.getChildren(this.row.id);
    },
  },
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
.first-cell {
  flex-shrink: 1;
  width: 100%;
}
.second-cell {
  min-width: 350px;
}
.recursive-row {
  margin-left: 40px;
}
.cell-content {
  margin-left: 15px;
}
</style>
