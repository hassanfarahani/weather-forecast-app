import axios from 'axios';
import router from '../../router';


const state = {
    forecasts: null
};

const mutations = {
    getSevenDays(state, forecasts) {
        state.forecasts = forecasts;
    }
};

const actions = {
    getSevenDays({commit}, searchQuery) {
        axios.get(`https://api.apixu.com/v1/forecast.json?key=16135cb936474a18b8822219190905&q=07112${searchQuery}&days=7`)
            .then(data => {
                // console.log(data);
                const forecasts = {
                    city: data.data.location.name,
                    country: data.data.location.country,
                    nextSevenDays: data.data.forecast.forecastday
                };
                // console.log(forecasts);
                commit('getSevenDays', forecasts);
            })
            .catch(error => console.log(error))
    }
};

const getters = {
    forecasts(state) {
        return state.forecasts;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}