<template>
    <div class="container">
      <nav>

            <a class="navbar-brand logo-link"><img src="@/assets/img/logo.png"></a>
            <span class="navbar-text logo-text text-light"><strong>WEATHER</strong>-FORECAST</span>

            <div @click="toggleMenu" class="toggle">
              <i class="fa fa-bars menu" aria-hidden="true"></i>
            </div>

            <ul :class="{active: openNav}">
                <li @click="openNav=!openNav" class="nav-item">
                  <router-link :to="{name:'Home'}" class="nav-link" active-class="active" exact><a><strong>Home</strong></a></router-link> 
                </li>
                <li @click="openNav=!openNav"  class="nav-item">
                    <router-link :to="{name:'Current', params: {query: query}}" class="nav-link" active-class="active" exact><a><strong>Current Weather</strong></a></router-link>
                </li>
                <li @click="openNav=!openNav"  class="nav-item">
                    <router-link :to="{name:'Forecast', params: {seven_days_forecast: query}}" class="nav-link" active-class="active" exact><a><strong>7 Days Forecast</strong></a></router-link>
                </li>
                <li @click="openNav=!openNav"  class="nav-item">
                  <router-link :to="{name:'About'}" class="nav-link" active-class="active" exact><a><strong>About</strong></a></router-link>
                </li>
            </ul>
      </nav>

    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'Navbar',
  data () {
    return {
      query: '',
      openNav: false
    }
  },
  methods: {
    toggleMenu() {
      this.openNav = !this.openNav;
    }
  },
  created() {
    eventBus.$on('searchQuery', searchQuery => {
      this.query = searchQuery;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    nav {
      width: 100%;
      background: #3fba1a;
    }

    ul {
      width: 80%;
      padding: .7rem .2rem;     
    }

    ul li {
      list-style: none;
      display: inline-block;
    }

    .container img {
        width: 100%;
    }
    .logo-link {
        width: 5%;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    .logo-text {
        font-size: 1.5em;
        font-style: italic;
    }

    .container ul a {
        color: #fff;
        transform: scale(.9);
        transition: all 0.2s;
        border: 1px; 
        border-radius: 50px;
    }

    .container ul a:hover {
        background-color: orangered;
        transform: scale(1.01);
    }

    .toggle {
      cursor: pointer;
      width: 100%;
      padding: .7rem 2rem;
      background: #227708;
      text-align: right;
      box-sizing:border-box;
      color: #fff;
      font-size: 1.6rem;
      display: none;
    }

    @media(max-width: 768px) {
      .toggle {
        display: block;
      }

      ul {
        width: 100%;
        display: none;
      }

      ul li {
        display: block;
        text-align: center;
      }

      .active {
        display: block;
      }
    }

    @media(max-width: 481px) {
      .logo-link {
        display: block;
        margin: 0 auto;
        width: 10%;
      }

      .logo-text {
        text-align: center;
        display: block;
      }
    }
</style>
