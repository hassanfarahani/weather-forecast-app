<template>
    <div class="container about">
          <h3 class="about-title"><strong>About WEATHER-FORECAST</strong></h3>
          <P class="about-par">WEATHER-FORECAST is a helpful website created to provide comprehensive weather data including daily weather forecast and the next seven days.
              We make use of <a href="https://www.apixu.com/" target="_blank">APIXU</a>, which is an online world weather API.</P>
          <p class="about-par"> Our goal is to make available reliable and extensive weather data, so that you can plan your life more efficient.</p>         
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .about {
        padding-top: 20px;
    }

    .about-par {
        width: 90%;
        margin: 20px auto;
    }

    @media(max-width: 481px) {
        .about-title {
            font-size: 1.1rem;
        }
    }
</style>
