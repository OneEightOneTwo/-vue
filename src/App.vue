<template>
<div class="app">
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
.app {
  height: 90%;
  position: relative;
}
.abc{
  overflow: hidden;
}
</style>



