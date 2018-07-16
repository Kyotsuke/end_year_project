<template>
  <div class="lesson2">
  <!-- PAGE 1 -->
    <div class="page_1" :class="{ hidden: page != '1'}">
      <h2>Comment déclarer/créer un objet</h2>

      <hr class="small"><br>

      <h5>Un <span class="color2">objet</span> peut être déclarer en utilisant plusieurs façons :</h5>

      <h5 class="types">
        <br>
        1/ Syntaxe Littérale
        <br><br>
        2/ Syntaxe d'Instanciation
        <br><br>
        3/ Syntaxe d'Instanciation ES5 (ECMAScript 5)
      </h5>

      <h5 class="example">
        <iframe width="100%" height="225" src="//jsfiddle.net/Kyotsuke/zq23cLf1/1/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner sur la page principale -->
      <router-link to="/" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">home</i>Accueil</router-link>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 2 -->
    <div class="page_2" :class="{ hidden: page != '2'}">
      <h2>Lire les propriétés d'un objet</h2>

      <hr class="small"><br>

      <h5>Pour lire la ou les propriétés d'un <span class="italic bold color2">objet</span>, vous pouvez utiliser diverses syntaxes :</h5>

      <h5 class="types">
        <br>
        1/ Syntaxe à point
        <br><br>
        2/ Syntaxe à crochets
        <br><br>
        3/ Et si jamais aucune valeur n'est définie,<br> vous pouvez toujours en ajouter une par défaut
      </h5>

      <h5 class="example">
        <iframe width="100%" height="225" src="//jsfiddle.net/Kyotsuke/vqef18zL/2/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 3 -->
    <div class="page_3" :class="{ hidden: page != '3'}">
      <h2>Modifier un objet</h2>

      <hr class="small"><br>

      <h5>Les <span class="italic bold color2">objets</span> peuvent être modifié à tout moment, ils sont <span class="italic bold color2">mutable</span>.</h5>

      <h5>Les syntaxes de modification d'un <span class="italic bold color2">objet</span> sont exactement les mêmes que la lecture.</h5>

      <h5>Si jamais la propriété que vous essayez de modifier n'existe pas, elle est créée.</h5>

      <br>

      <h5 class="example">
        <iframe width="100%" height="225" src="//jsfiddle.net/Kyotsuke/4nwuypcz/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 4 -->
    <div class="page_4" :class="{ hidden: page != '4'}">
      <h2>Supprimer un objet</h2>

      <hr class="small"><br>

      <h5>Rien de plus simple que de supprimer la <span class="italic bold color2">propriété</span> d'un <span class="italic bold color2">objet</span> grace à l'opérateur <span class="italic bold color2">delete</span>.</h5>

      <br>

      <h5 class="example">
        <iframe width="100%" height="125" src="//jsfiddle.net/Kyotsuke/tenhp8cj/1/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'accéder au questionnaire -->
      <router-link to="/questionnaire" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">keyboard_arrow_right</i>Questionnaire</router-link>
      <!-- Permet de retourner sur la page principale -->
      <router-link to="/" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">home</i>Accueil</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lesson 2',
  data () {
    return {
      msg  : 'Bienvenue sur cette leçon concernant les bases du JSON',
      page : 1
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
.lesson2, .btn {
  margin-top: 50px;
}

.types {
  font-size: 1.4em;
}

/* ****** JSFIDDLE ****** */
.example {
  font-size: 1.4em;
  text-align: center;
  background-color: #eee;
  border: 1px solid black;
  width: 35%;
  position: relative;
  left: 32%;
}
</style>
