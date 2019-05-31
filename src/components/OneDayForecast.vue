<template>
        <div>
            <div class="wrapper-forecast">
                <div>
                    <p>{{ forecast.date | toWeekDay }}</p>
                </div>
                <div>
                    <figure style="margin-bottom: 0;">
                        <img :src="forecast.day.condition.icon" alt="weather icon">
                    </figure>                        
                    <span class="hide-s">{{ forecast.day.condition.text }}</span>
                </div>
                <div class="hide-s">
                    <p>{{ forecast.day.mintemp_c }}°C</p>
                </div>
                <div class="hide-s">
                    <p>{{ forecast.day.maxtemp_c }}°C</p>
                </div>
                <div>
                    <p>{{ forecast.day.avgtemp_c }}°C</p>
                </div>
                <div class="hide-s hide-m">
                    <p>{{ forecast.day.maxwind_kph }} kph</p>
                </div>
                <div class="hide-s hide-m">
                    <p>{{ forecast.day.totalprecip_mm }} mm</p>
                </div>
                <div class="hide-s hide-m hide-l">
                    <p>{{ forecast.astro.sunrise}}</p>
                </div>
                <div class="hide-s hide-m hide-l">
                    <p>{{ forecast.astro.sunset }}</p>
                </div>
            </div>
        </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['forecast'],
    data() {
        return {
            show: true
        }
    },
    filters: {
        toWeekDay(value) {
            return moment(value).format('dddd');
        }
    }
}
</script>

<style>
    .wrapper-forecast {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-row-gap: 20px;
        color: #fff;
        place-items:center;
        background: #55552b;
    }

    @media(max-width: 1024px) {
        .hide-l {
            display: none;
        }

        .wrapper-forecast {
            grid-template-columns: repeat(7, 1fr);
        }
    }


    @media(max-width: 768px) {
        .hide-m {
            display: none;
        }

        .wrapper-forecast {
            grid-template-columns: repeat(5, 1fr);
        }
    }


    @media(max-width: 481px) {
        .hide-s {
            display: none;
        }

        .wrapper-forecast {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>

