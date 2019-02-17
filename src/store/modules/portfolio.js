const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCKS'(state,{stockId, stockQty, stockPrice}){
        const record = state.stocks.find(element=> element.id == stockId);

        if(record){
            record.quantity = parseInt(record.quantity)+parseInt(stockQty);
        }
        else{
            state.stocks.push({
                id: stockId,
                quantity: stockQty
            });
        }
        state.funds -= stockQty * stockPrice;
    },

    'SELL_STOCKS'(state,{stockId, stockQty, stockPrice}){
        const record = state.stocks.find(element=> element.id == stockId);

        if(record.quantity > stockQty){
            record.quantity -= stockQty;
        }
        else{
            state.stocks.splice(state.stocks.indexOf(record),1);
        }
        state.funds += stockQty * stockPrice;
    },

    'SET_PORTFOLIO'(state,portfolio){
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStocks: ({commit},order)=>{
        commit('SELL_STOCKS',order);
    }
};

const getters = {
    stockPortfolio(state,getters){
        return state.stocks.map(stock=>{
            const record = getters.stocks.find(element=> element.id == stock.id);
            return {
                id: stock.id,
                price: record.price,
                name: record.name,
                quantity: stock.quantity
            };
        });
    },
    funds(state){
        return state.funds;
    }
};


export default{
    state,
    mutations,
    actions,
    getters
}