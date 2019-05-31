<template>
    <div class="container">
        <div class="card">
            <div class="card-body body">
                <h4 class="card-title card-title--small">{{ forecasts.city }}, {{ forecasts.country }} - next 7 days</h4>
                <div class="wrapper-forecast-title">
                    <div>
                        Date
                    </div>
                    <div>
                        Forecast
                    </div>
                    <div class="hide-s">
                        Min Temp
                    </div>
                    <div class="hide-s">
                        Max Temp
                    </div>
                    <div>
                        Ave Temp
                    </div>
                    <div class="hide-s hide-m">
                        Wind
                    </div>
                    <div class="hide-s hide-m">
                        Precipitation
                    </div>
                    <div class="hide-s hide-m hide-l">
                        Sunrise
                    </div>
                    <div class="hide-s hide-m hide-l">
                        Sunset
                    </div>
                </div>
                <OneDayForecast v-for="(forecast, index) in forecasts.nextSevenDays" :forecast="forecast" :key="index" />
            </div>
        </div>
    </div>    
</template>

<script>
import OneDayForecast from './OneDayForecast.vue';

export default {
    data() {
        return {
            searchQuery: this.$route.params.seven_days_forecast
        }
    },
    computed: {
        forecasts() {
            return !this.$store.getters.forecasts ? false : this.$store.getters.forecasts
        }
    },
    components: {
        OneDayForecast
    },
    created() {
        this.$store.dispatch('getSevenDays', this.searchQuery)
    }
}
</script>

<style>

    .wrapper-forecast-title {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-row-gap: 1px;
        grid-auto-rows: minmax(60px, auto);
        color:#fff;
        background: #000;
        place-items: center;
    }

    @media(max-width: 1024px) {
        .hide-l {
            display: none;
        }

        .wrapper-forecast-title {
            grid-template-columns: repeat(7, 1fr);
        }
    }

    @media(max-width: 768px) {
        .hide-m {
            display: none;
        }

        .wrapper-forecast-title {
            grid-template-columns: repeat(5, 1fr);
        }
    }
    

    @media(max-width: 481px) {
        .hide-s {
            display: none;
        }

        .wrapper-forecast-title {
            grid-template-columns: repeat(3, 1fr);

        }

        .card-title--small {
            font-size: 1rem;
        }
    }


</style>
