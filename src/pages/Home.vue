<template>
    <div id="app">
        <Xheader :isShowBack="true" :isShowHam="true">主页</Xheader>
        <shouye/>
         <HelloWorld />
         <Xtoast />
        <Grxx />
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import Xtoast from '../components/Xtoast.vue'
import shouye from '../components/shouye.vue'
import Grxx from '../components/Grxx.vue'
import Xheader from '../components/Xheader.vue'
import state from '../observable.js'
export default {
  name: 'app',
  components: {
  shouye,
  Grxx,
  Xheader,
    HelloWorld,
    Xtoast,
  },
  computed:{
    state(){
      return state
    }
  }
}
</script>
<style>
</style>
