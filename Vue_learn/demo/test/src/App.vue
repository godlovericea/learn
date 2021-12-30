<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <!-- <RefCom msg="Welcome to Your Vue.js App" /> -->
        <!-- <PropsCom /> -->
        <!-- <DongHua /> -->
        <Count></Count>
        <!-- <Person></Person> -->
    </div>
</template>

<script>
// import RefCom from "./components/RefDom/RefCom.vue";
// import PropsCom from "./components/PropsCom/PropsCom.vue";
// import DongHua from "./components/DongHua/DongHua.vue";
import Count from './components/VuexCom/Count.vue'
// import Person from './components/VuexCom/Person.vue'
export default {
  name: "App",
  components: {
    // RefCom,
    // PropsCom,
    // DongHua,
    Count,
    // Person
  },
  mounted(){
    console.log(this)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
