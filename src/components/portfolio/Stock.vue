<template>
    <div class="col-sm-6 col-md-4 my-2">
        <div class="card">
            <div class="card-header bg-success">
                <b>{{stocks.name}}</b>
                <small class="ml-2">
                    {PRICE: {{stocks.price}}, QTY: {{stocks.quantity}} }
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
                    class="btn btn-sm bg-success" 
                    @click="sellStock"
                    :disabled="quantity<=0 || insufficientQty">
                        Sell
                    </button>
                </div>
            </div>
        </div>
        <div class="alert alert-info my-2" v-if="insufficientQty"><small>Quantity limit exceeded!</small></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stocks'],
    methods: {
        sellStock(){
            const order = {
                stockId: this.stocks.id,
                stockQty: this.quantity,
                stockPrice: this.stocks.price
            };

            this.$store.dispatch('sellStocks',order);
            console.log(order);
            this.quantity = 0;
        }
    },
    computed:{
        insufficientQty(){
            console.log(this.quantity,this.stocks.quantity,this.quantity > this.stocks.quantity);
            return this.quantity > parseInt(this.stocks.quantity);
        }
    },
    data: function(){
        return{
            quantity: 0
        };
    }
}
</script>