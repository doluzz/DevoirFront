export const ACTIONS = {
  ADD: 'add',
}

export const state = () => ({
  number: 0,
})

export const mutations = {
  INCREMENT: (state) => state.number++,
}

export const actions = {
  add({ commit }) {
    commit('INCREMENT')
  },
}
