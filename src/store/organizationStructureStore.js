import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import orderBy from "lodash.orderby";

Vue.use(Vuex);

const useOrganizationStructureStore = new Vuex.Store({
  state: {
    users: [],
    sortBy: "",
    sortDirection: ""
  },
  mutations: {
    addUser: function(state, payload) {
      const lastUser = state.users.at(-1);
      const lastId = lastUser ? lastUser.id : 0;
      state.users.push({ ...payload, id: lastId + 1 });
    },
    toggleSort: function(state, payload) {
      state.sortBy = payload;

      if (!state.sortDirection) {
        state.sortDirection = "desc";
        return;
      }
      if (state.sortDirection === "desc") {
        state.sortDirection = "asc";
        return;
      }
      if (state.sortDirection === "asc") {
        state.sortDirection = null;
        state.sortBy = null;
        return;
      }
    }
  },
  getters: {
    sortedUsers(state) {
      const sortedData = state.sortBy
        ? orderBy(state.users, row => row[state.sortBy], state.sortDirection)
        : state.users;
        console.log(JSON.parse(JSON.stringify(sortedData)));
      return sortedData;
    },
    getChildren: (state, getters) => id => {
      return getters.sortedUsers.filter(user => user.boss === id);
    }
  },
  plugins: [createPersistedState()]
});

export default useOrganizationStructureStore;

/*

const organizationStructureStore = "organizationStructure";
const localStorageKey = "user-info";

export const useOrganizationStructureStore = defineStore({
  id: organizationStructureStore,
  state: () => ({
    isLoading: false,
    users: [],
  }),
  actions: {
    addUser: function (user, phone, boss) {
      this.users.push({user, phone, boss});
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: localStorageKey,
        storage: localStorage,
      },
    ],
  },
});

*/
