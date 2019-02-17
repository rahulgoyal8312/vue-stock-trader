import stocks from '../../data/stocks'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state,stocks){
        state.stocks = stocks;
    },
    'RAND_STOCKS'(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round( stock.price * ( 1.25 + Math.random() - 0.66 ) )
        });
    }
};

const actions = {
    buyStock: ({commit},order)=> {
        commit('BUY_STOCKS',order);
    },
    initStocks: ({commit})=>{
        commit('SET_STOCKS',stocks)
    },
    randStocks: ({commit})=>{
        commit('RAND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}
