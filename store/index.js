export const state = () => ({
  date: Date.now(),
  menuOpen: true
});

export const actions = {
  openMenu({ commit }) {
    commit('OPEN_MENU');
  },
  closeMenu({ commit }) {
    commit('CLOSE_MENU');
  }
};

export const mutations = {
  OPEN_MENU(state) {
    state.menuOpen = true;
  },
  CLOSE_MENU(state) {
    if (state.menuOpen) {
      state.menuOpen = false;
    }
  }
};

export const getters = {
  menuOpen(state) {
    return state.menuOpen;
  }
};
