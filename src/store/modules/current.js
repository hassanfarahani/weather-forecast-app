import axios from 'axios'
import router from '../../router';

const state = {
    currentWeather: null
};

const mutations = {
    getCurrent(state, current) {
        state.currentWeather = current;
    }
};

const actions = {
    getCurrent({commit}, searchQuery) {
        axios.get(`https://api.apixu.com/v1/current.json?key=16135cb936474a18b8822219190905&q=${searchQuery}`)
            .then(data => {
                // console.log(data.data);
                const current = {
                    city: data.data.location.name,
                    country: data.data.location.country,
                    icon: data.data.current.condition.icon,
                    text: data.data.current.condition.text,
                    temp: data.data.current.temp_c,
                    feelsLike: data.data.current.feelslike_c,
                    wind: data.data.current.wind_kph,
                    windDir: data.data.current.wind_dir,
                    humidity: data.data.current.humidity,
                    cloud: data.data.current.cloud,
                    precipitation: data.data.current.precip_mm
                }
                
                commit('getCurrent', current);
            })
            .catch(error => {
                console.log(error);
                router.push({name: 'Home'});
            })
    }
};

const getters = {
    current(state) {
        return state.currentWeather;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}