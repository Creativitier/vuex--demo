<template>
  <div id="app">
    {{count}}
    <p>
      <button @click="increment">ad</button>
    </p>
    <hr>
    <ul>
      <li style="background-color: red;" @click="async(index)" v-for="(item, index) in [0,1,2,3]">{{item}}</li>
    </ul>
    <ol>
      <li v-if="count===index" v-for="(item, index) in [0,1,2,3]">
        {{item}}
      </li>
    </ol>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters([
       'count'
    ])
  },
  methods: {
    ...mapMutations({
      increment: 'INCREMENT',
      async: 'ASYNC'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
