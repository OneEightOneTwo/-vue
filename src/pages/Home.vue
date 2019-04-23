<template>
    <div id="app">
        <Xheader :isShowBack="true" :isShowHam="true">主页</Xheader>
        <shouye/>
        <Grxx />
    </div>
</template>
<script>
import shouye from '../components/shouye.vue'
import Grxx from '../components/Grxx.vue'
import Xheader from '../components/Xheader.vue'
import state from '../observable.js'
export default {
  name: 'app',
  components: {
  shouye,
  Grxx,
  Xheader
  },
  computed:{
    state(){
      return state
    }
  }
}
</script>

