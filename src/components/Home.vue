<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may save & load your data</h6>
        <h6>Click on 'End Day' to Begin your New Day!</h6>
        <hr>
        <p>Your Funds: {{ this.$store.getters.funds | currency }}</p>
    </div>
</template>

<script>
export default {
    
}
</script>