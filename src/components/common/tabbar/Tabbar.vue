<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style  scoped>
  #tab-bar{
    background-color: #f9f9f9;

    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;

    border-top: 1px solid rgba(100, 100, 100, 0.1);
  }
</style>