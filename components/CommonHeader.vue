<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainHeader',
})
</script>

<template>
  <section class="header-wrapper">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">IP Blocker</b-navbar-brand>
    </b-navbar>
  </section>
</template>

<style lang="scss">
.header-wrapper {
  height: 50px;
  width: 100%;
  background: #779fa5;
  position: fixed;
  z-index: 1000;
}
</style>
