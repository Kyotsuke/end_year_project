<template>
  <div class="lesson1">
  <!-- PAGE 1 -->
    <div class="page_1" :class="{ hidden: page != '1'}">
      <h2>Définition</h2>

      <hr class="small"><br>

      <h5>Le <span class="color2">JSON</span> (JavaScript Object Notation) est un format de données textuelles dérivé de la notation des objets du langage JavaScript.</h5>

      <h5>Le principal avantage de <span class="color2">JSON</span> est qu’il est simple à mettre en œuvre par un développeur tout en étant complet.</h5>

      <h5>Il vous permet par example de faire une liste d'élèves complet ou une fiche avec des caractéristiques pour un personnage.</h5>

      <br>

      <h5>
        Ce format contient 6 type de base :
      </h5>

      <h5 class="types">
        <br><br>
        - Chaîne de caractère (String)
        <br><br>
        - Nombre (Number)
        <br><br>
        - Booléen (Boolean)
        <br><br>
        - Objet (Object)
        <br><br>
        - Tableau (Array)
        <br><br>
        - Une valeur vide (null)
      </h5>

      <!-- Permet de retourner sur la page principale -->
      <router-link to="/" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">home</i>Accueil</router-link>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 2 -->
    <div class="page_2" :class="{ hidden: page != '2'}">
      <h2>TypeOf</h2>

      <hr class="small"><br>

      <h5>Pour connaître le type d'un élément vous pouvez utiliser l'opérateur <span class="italic bold color2">typeof</span></h5>

      <br>

      <h5>
        Par exemple :
      </h5>

      <h5 class="example">
        <iframe width="100%" height="300" src="//jsfiddle.net/Kyotsuke/pjagtwnc/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 3 -->
    <div class="page_3" :class="{ hidden: page != '3'}">
      <h2>Propriétés & Méthodes</h2>

      <hr class="small"><br>

      <h5>Les <span class="italic bold color2">objets</span> sont des conteneurs qui renferment d’autres <span class="italic bold color2">objets</span> : des variables, des fonctions ... </h5>

      <br>

      <h5><span class="italic bold color2">Propriétés</span>, c'est le nom que l'on donne aux variables d'objets. (Ci-dessous <span class="italic color2">name</span> et <span class="italic color2">age</span> sont des propriétés)</h5>

      <h5><span class="italic bold color2">Méthodes</span>, c'est le nom que l'on donne aux fonctions d'objets. (Ci-dessous <span class="italic color2">fire</span> est une méthode)</h5>
      <h5 class="example">
        <iframe width="100%" height="300" src="//jsfiddle.net/Kyotsuke/94eyfdxj/14/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 4 -->
    <div class="page_4" :class="{ hidden: page != '4'}">
      <h2>Ciblage Interne</h2>

      <hr class="small"><br>

      <h5>Au sein d'une <span class="italic bold color2">méthode</span>, le mot clé <span class="italic bold color2">this</span> représente l'<span class="italic bold color2">objet</span>.</h5>

      <h5>(Ci-dessous, la méthode <span class="italic bold color2">get_info</span> utilise le mot clé <span class="italic bold color2">this</span> pour recupérer les informations du joueur)</h5>

      <br>

      <h5 class="example">
        <iframe width="100%" height="320" src="//jsfiddle.net/Kyotsuke/n4obx7dq/2/embedded/js/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      </h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'aller à la page suivante -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page += 1"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
    </div>
  <!-- PAGE 5 -->
    <div class="page_5" :class="{ hidden: page != '5'}">
      <h2>Conclusion</h2>

      <hr class="small"><br>

      <h5>
        Le <span class="italic bold color2">JSON</span> vous permet de simplifier la mise en place d'objets complexes<br>
        aux utilisations multiples comme une fiche personnage complète ou encore mettre en place<br>
        une fiche sur un livre avec un titre, une description, un genre etc.
      </h5>

      <br>

      <h5>
        Les <span class="italic bold color2">objets</span> sont des conteneurs renfermant des propriétés et / ou des méthodes.
      </h5>

      <h5>Pour connaître le type d'une <span class="italic bold color2">propriété</span> ou d'une <span class="italic bold color2">méthode</span>, vous pouvez utiliser l'opérateur <span class="italic bold color2">typeof</span>.</h5>

      <!-- Permet de retourner à la page précédente -->
      <button class="waves-effect waves-light btn bg-color1" v-on:click="page -= 1"><i class="material-icons left">keyboard_arrow_left</i>Retour</button>
      <!-- Permet d'accéder à la partie suivante -->
      <router-link to="/lesson/2" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">keyboard_arrow_right</i>Partie suivante</router-link>
      <!-- Permet de retourner sur la page principale -->
      <router-link to="/" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">home</i>Accueil</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lesson 1',
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
.lesson1, .btn {
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
