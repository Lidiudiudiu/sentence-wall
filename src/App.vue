<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
@import './assets/fonts/icomoon/style.css';

.ab {
  font-size: @font-16;
  color: @warning-color;
}

.icon-heart {
  font-size: 90px;
  color: @primary-color;
}
</style>
