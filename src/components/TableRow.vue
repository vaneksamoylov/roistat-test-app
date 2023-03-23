<template>
  <div>
    <tr>
      <td>
        <button v-if="children.length" @click="isShown = !isShown">+</button>
        {{ row.name }}
      </td>
      <td>
        {{ row.phone }}
      </td>
    </tr>
    <table-row style="margin-left: 40px;" v-if="isShown" v-for="child in children" :key="child.id" :row="child" />
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
