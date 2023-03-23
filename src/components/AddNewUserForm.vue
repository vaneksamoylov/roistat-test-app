<template>
  <div class="modal">
    <button class="btn" @click="isModalShown = true">Добавить</button>

    <div v-if="isModalShown" class="popupContainer">    
      <form class="popupForm">
        <span class="close" @click="isModalShown = false">X</span>
        <fieldset class="form">
          <div class="input-container">
            <label for="name">Имя</label>
            <input type="text" id="name" v-model="name" value="User" required />
          </div>
          <div class="input-container">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" value="User" />
          </div>
          <div class="input-container">
            <span>Начальник</span>
            <select v-model="boss">
              <option disabled value=""></option>
              <option v-for="user in sortedUsers" :value="user.id">
                {{ user.name }}
              </option>
            </select>
          </div>
          <button :disabled="!name" @click.prevent="addUser">
          Сохранить
        </button>
        </fieldset>
        
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
      this.isModalShown = false;
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 15px 50px;
  border-radius: 20px;
  background-color: blanchedalmond;
  cursor: pointer;
  transition: background-color linear 0.5s;
}
.btn:hover {
  background-color: aliceblue;
}
.modal {
  display: flex;
  margin-bottom: 40px;
}
.popupContainer {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.popupForm {
  z-index: 999;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 35px;
  background-color: white;
  border-radius: 25px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  padding: 30px;
}
.input-container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.close {
  margin: -20px 0 20px;
  text-align: right;
  cursor: pointer;
  width: fit-content;
  margin-left: auto;
}
</style>
