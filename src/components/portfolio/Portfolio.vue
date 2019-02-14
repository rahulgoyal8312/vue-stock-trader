<template>
    <div class="row">
        <app-stock v-for="(stock,index) in stocks" :stocks="stock" :key="index*Math.random()"></app-stock>
        <div v-if="stocks.length === 0" class="font-weight-bold mx-auto mt-3">Go ahead, Buy a stock!</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components: {
        appStock: Stock
    }
}
</script>