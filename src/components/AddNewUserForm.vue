<template>
  <div>
    <button @click="isModalShown = !isModalShown">Toggle</button>

    <div v-if="isModalShown">
      <form>
        <fieldset>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" value="User" />
          <label for="phone">Phone</label>
          <input type="text" id="phone" v-model="phone" value="User" />
          <span>Начальник</span>
          <select v-model="boss">
            <option disabled value=""></option>
            <option v-for="user in sortedUsers" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </fieldset>
        <button @click.prevent="addUser">
          username
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalShown: false,
      name: "",
      phone: "",
      boss: ""
    };
  },
  computed: {
    sortedUsers() {
      return this.$store.getters.sortedUsers;
    }
  },
  methods: {
    addUser() {
      this.$store.commit("addUser", {
        name: this.name,
        phone: this.phone,
        boss: this.boss
      });
    }
  }
};
</script>
