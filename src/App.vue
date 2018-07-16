<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png" alt="logo" name="logo" class="logo"></router-link>
    <hr>
    <router-view></router-view>

    <footer>Crée par <a target="_blank" href="https://mattieuvendeville.fr/">Mattieu VENDEVILLE</a> pour l'École Multimédia</footer>
  </div>
</template>

<script>

import Vue from "vue"
import Materials from "vue-materials"
Vue.use(Materials)

import Home from './components/Home';


export default {
  name: 'app'
}
</script>

<style>
/* ****** APP ****** */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

/* ****** HEADER ****** */
.logo{
  max-width: 200px;
}

/* ****** FOOTER ****** */
footer{
  position: absolute;
  bottom: 10px;
  width: 100%;
}
/* ****** ****** APP GLOBAL CLASSES ****** ****** */
.small{
  width: 300px;
}

.hidden {
  display: none;

}

.btn{
  font-weight: normal;
}

/* ****** FONT STYLE ****** */
.italic {
  font-style: italic;
}

.bold {
  font-weight: bold;
}

/* ****** COLORS ****** */
footer a, .color1 {
  color: #355C7D;
  font-weight: bold;
}

footer a:hover {
  color: #6C5B7B;
}

.color2 {
  color: #F67280;
}

.bg-color1 {
  background-color: #355C7D;
}

.bg-color1:hover {
  background-color: #6C5B7B;
}

.bg-color2 {
  background-color: #F67280;
}

.bg-color2:hover {
  background-color: #C06C84;
}
</style>
