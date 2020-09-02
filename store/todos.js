export const state = () => ({
  list: [
    {text: "Learn Nuxt", done: true},
    {text: "Build something", done: false}
  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, index) {    
    state.list.splice(index, 1)
  },
  toggle(state, index) {
    state.list[index].done = !state.list[index].done    
  }
}