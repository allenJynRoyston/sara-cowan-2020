<template lang='pug'>
  div.use-transition
    .page-container
      Header
        h1 Todo (Vuex Example)
      BodyContent
        hr
        .list-container
          ul
            li(v-for="(todo, index) in todos")
              input(:checked="todo.done" type="checkbox" v-on:click='toggle(index)')
              span.todoitem(:class="{ done: todo.done }" v-on:click='toggle(index)') {{ todo.text }} 
              span(v-if='todo.done'  v-on:click='remove(index)') 🗑️
          input(@keyup.enter="addTodo" placeholder="What needs to be done?")  
    Footer
</template>

<script>
export default {
  transition(to, from) {            
    return 'slide-left'
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    toggle(index){
      this.$store.commit('todos/toggle', index)
    }, 
    remove(index){
      console.log('remove')
      this.$store.commit('todos/remove', index)
    }        
  }
}
</script>

<style lang='scss'>
  .list-container{
    display: flex;
    flex-direction: column;

    .todoitem{
      margin-left: 5px;
    }

    .done {
      text-decoration: line-through;
    }    

    li{
      cursor: pointer;
      list-style-type:none;
    }  
  }


</style>