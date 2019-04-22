<template>
  <div>
    <Xheader :isMenu="true" :isMessage="true" >微信</Xheader>
    <shouye/>
    <RightMenu/>
  </div>
</template>

<script>
import shouye from "../components/shouye.vue";
import Xheader from "../components/Xheader.vue";
import RightMenu from "./RightMenu.vue";

export default {
  name: "app",
  components: {
    shouye,
    Xheader,
    RightMenu
  }
};
</script>

<style>
</style>
