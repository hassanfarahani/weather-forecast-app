<template>
    <div class="container">
        <div class="card">
            <div class="card-body body wrapper-current">
                <div class="bg-black">
                    Weather <strong>Today</strong> 
                </div>
                <div class="bg-black">
                   <strong>{{ current.city }}</strong> , {{ current.country }}
                </div>
                <div class="bg-black">
                    <figure class="weather-icon">
                            <img :src="current.icon" alt="weather icon">
                    </figure>
                    &nbsp;<span class="temp-number"><strong>{{ current.temp }}</strong></span>&nbsp;<span class="temp-degree"><strong>°C</strong></span>
                    <p>{{ current.text }}</p>
                </div>
                <div class="bg-black">
                    <p class="feels-like">Feels Like</p>
                    <P><span>{{ current.feelsLike }}</span>&nbsp;<span>°C</span></P>
                </div>

                <div class="nested bg-black">
                    <div>
                        <p class="margin-tb">Wind</p>
                        <p>{{ current.windDir }} {{ current.wind }} kph</p>
                    </div>
                    <div>
                        <p class="margin-tb">Humidity</p>
                        <p>{{ current.humidity }}</p>
                    </div>
                </div>
                <div class="nested bg-black">
                    <div>
                        <p class="margin-tb">Cloud Cover</p>
                        <p>{{ current.cloud }}%</p>
                    </div>
                    <div>
                        <p class="margin-tb">Precipitation</p>
                        <p>{{current.precipitation}} mm</p>
                    </div>
                </div>
                <a @click="navigateToHome" class="btn btn-warning back-btn">Back to Home</a>
                <router-link :to="{ name: 'Forecast', params: {seven_days_forecast: searchQuery}}" class="btn btn-info back-btn"><a>Next 7 days</a></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            searchQuery: this.$route.params.query
        }
    },
    computed: {
        current() {
            return !this.$store.getters.current ? false : this.$store.getters.current;
        }
    },
    created() {
        this.$store.dispatch('getCurrent', this.searchQuery);
    },
    methods: {
        navigateToHome() {
            this.$router.push({name: 'Home'});
        }
    }
}
</script>

<style>
    .card .wrapper-current {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1px;
        grid-auto-rows: minmax(30px, auto);
        color:#fff;
        background: #d6f5d6;
    }
    .bg-black {
        background: #000;
    }

    .weather-icon {
        display: inline-block;
        vertical-align: 200%;
        margin-bottom:0;
    }

    .temp-number {
        font-size: 4em;
        vertical-align: 30%;
        color: #ff9900;
    }

    .temp-degree {
        vertical-align: 150%;
        font-size: 1.5em;
    } 

    .nested {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .margin-tb {
        margin-bottom: 0;
        margin-top: 5%;
    }

    .margin-t {
        margin-top: 10%;
    }

    .feels-like {
        margin-top: 9%;
        margin-bottom: 0;
    }

    .back-btn {
        width: 30%;
        margin: 0 auto;
        cursor: pointer;
    }

    .forecast-btn {
        width: 30%;
        margin: 0 auto;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        .back-btn {
            width: 60%;
            display: inline-block;
        }
    }

    @media(max-width: 481px) {
        .card .wrapper-current {
            display: grid;
            grid-template-columns: 1fr;

        }
        .back-btn {
            width: 60%;
            display: inline-block;
        }

    }

</style>
