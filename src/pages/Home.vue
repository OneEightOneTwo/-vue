<template>
  <div>
    <!-- <router-view></router-view> -->
    <HelloWorld />
    <Xtoast />
  </div>
</template>

<script>
//首页
import HelloWorld from '../components/HelloWorld.vue'
import Xtoast from '../components/Xtoast.vue'

export default {
  name: "app",
  components: {
    HelloWorld,
    Xtoast,
  }
};
</script>

<style>
</style>
