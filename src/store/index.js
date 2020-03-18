import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cards: [
            {
                id: 1,
                chip: require("@/assets/chip-dark.svg"),
                vendorName: 'bitcoin',
                cardNum: "7364018765218765",
                Name: "Anders Andersson",
                vendorImage: require("@/assets/vendor-bitcoin.svg"),
                month: "02",
                year: "24",
            },
            {
                id: 2,
                chip: require("@/assets/chip-dark.svg"),
                vendorName: 'evil',
                cardNum: "8623763276423189",
                Name: "Anders Andersson",
                vendorImage: require("@/assets/vendor-evil.svg"),
                month: "01",
                year: "44",

            },
        ]
    },
    mutations: {
        addcard(state, data) {
            state.cards.push(data)
        },
    },
    actions: {
        addcard(context, data) {
            context.commit('addcard', data)
        },
    }
});