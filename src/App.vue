<template>
  <div class="container">
    <app-header></app-header>
    <div class="alert alert-info my-2 text-center">Your Funds: {{ $store.getters.funds }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  created(){
    this.$store.dispatch('initStocks');
  }
}
</script>
