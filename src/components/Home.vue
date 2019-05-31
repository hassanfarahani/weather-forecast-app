<template>
    <div class="container">
            <div class="card">
                <div class="card-body body">
                    <h4 class="card-title title">Get Weather Forecast</h4>
                    <h6 class="card-subtitle text-muted subtitle">Enter a City</h6>
                    <div>
                        <input type="search" v-model="query" @input="emitQuery"  @keyup.enter="message" class="input-search" placeholder="search by city name ..." aria-label="Search">
                    </div>
                    <div>
                        <button @click="message" class="btn btn-outline-success btn-search"><strong>Search</strong></button>
                    </div>                    
                    <p v-if="feedback" class="btn btn-danger warning-message">{{ feedback }}</p>                                          
                </div>
            </div>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    data()   {
        return {
            query: null,
            feedback: null
        }
    },
    methods: {
        message() {
            if (this.query) {
                this.$router.push({ name: 'Current', params: { query: this.query }});
            } else {
                this.feedback = 'Please enter the name of a city';
                setTimeout(() => {
                    this.feedback = null;
                }, 3000)
            }


        },
        emitQuery(e) {
            eventBus.$emit('searchQuery', e.target.value);
        }
    }
}
</script>


<style>
    .card .body {
    text-align: center;
    }

    .card .title {
        margin-bottom: 1em;
        font-size: 4em;
    }

    .card .subtitle {
        margin-bottom: 1em;
    }

    .input-search {
        width: 50%;
        height: 3em;
        border: 1px solid  #33cc33;
        border-radius: 2em;
        padding-left: 1em;
    }

    .input-search:focus {
        outline: none;
    }

    .input-search::placeholder {
        color:  #adebad;
        font-style: italic;
    }

    .btn-search {
        width: 30%;
        margin-top: 1em;
        border-radius: 1em;
    }

    .warning-message {
        margin-top: 2%;
    }

    @media(max-width: 481px) {
        .btn-search {
            width:40%;
        }

        .input-search {
            width: 90%;
        }

        .card .title {
            font-size: 2.5em;
        }
    }
</style>
