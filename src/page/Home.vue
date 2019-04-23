<template>
  <div  id="app" :style="this.state.isActionsheet?'margin:0 -92% 0 90%;':'margin: 0;'">
    <Xheader :isMenu="true" :isMessage="true" >微信</Xheader>
    <shouye/>
    <RightMenu/>
    <Grxx/>
  </div>
</template>

<script>
import shouye from "../components/shouye.vue";
import Xheader from "../components/Xheader.vue";
import RightMenu from "./RightMenu.vue";
import Grxx from '../components/Grxx.vue'
import state from '../observable.js'

export default {
  name: "app",
  components: {
    shouye,
    Xheader,
    RightMenu,
    Grxx,
  },
  computed:{
    state(){
      return state
    }
  }
};
</script>

<style>

</style>
