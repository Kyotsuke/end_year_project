<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
      <hr class="small"><br>
    <h5><router-link to="/lesson/1" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">keyboard_arrow_right</i>Partie 1 - Les bases</router-link></h5>
    <br>
    <h5><router-link to="/lesson/2" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">keyboard_arrow_right</i>Partie 2 - Intéractions avec l'objet</router-link></h5>
    <br>
    <h5><router-link to="/questionnaire" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">keyboard_arrow_right</i>QCM</router-link></h5>
    <br>

    <hr class="small">
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg  : 'Bienvenue sur cette leçon concernant les bases du JSON'
    }
  },
  created () {

  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h4 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.hello {
  margin-top: 75px;
}

.btn{
  min-width: 600px;;
}
</style>
