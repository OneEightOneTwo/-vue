<template>
<div>
  <div class="abc">
    <router-view></router-view>
  </div>
</div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  width: 100%;
}
#app {
  height: 90%;
  transition: margin .5s;
  overflow: hidden;
  position: relative;
}
.abc{
  overflow: hidden;
}
</style>



