<template>
    <div id="app" :style="this.state.isActionsheet?'margin:0 -90% 0 90%;':'margin:0;'">
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

