<template>
    <div class="col-sm-6 col-md-4 my-2">
        <div class="card">
            <div class="card-header bg-success">
                <b>{{stock.name}}</b>
                <small class="ml-2">
                    {PRICE: {{stock.price}} }
                </small>
            </div>

            <div class="card-body">
                <div class="float-left">
                    <input type="number" 
                    name="name" 
                    placeholder="Quantity" 
                    class="form-control"
                    v-model="quantity">
                </div>
            </div>
            <div class="card-footer bg-white" style="max-height: 50px;">
                <div class="float-right">
                    <button 
                    class="btn btn-sm btn-success" 
                    @click="buyStock"
                    :disabled="quantity<=0 || insufficientFunds">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: ['stock'],
    computed: {
        insufficientFunds(){
            return this.quantity * this.stock.price > this.$store.getters.funds;
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockQty: this.quantity,
                stockPrice: this.stock.price
            }
            console.log(order);
            this.$store.dispatch('buyStock',order);
            this.quantity = 0;
        }
    },
    data: function(){
        return{
            quantity: 0
        };
    }
}
</script>