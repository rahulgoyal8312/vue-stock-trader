import stocks from '../../data/stocks'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state,stocks){
        state.stocks = stocks;
    },
    'RAND_STOCKS'(state){

    }
};

const actions = {
    buyStock: ({commit},order)=> {
        commit('BUY_STOCKS',order);
    },
    initStocks: ({commit})=>{
        commit('SET_STOCKS',stocks)
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
