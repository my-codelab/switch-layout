export const state = () => ({
  name: 'default'
})

export const mutations = {
  setName (state, name) {
    state.name = name
  }
}
