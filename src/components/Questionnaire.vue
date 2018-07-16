<template>
  <div class="questionnaire">
    <br>
    <h4>QUESTIONNAIRE JSON</h4>
    <hr class="small">
    <br>
    <!-- Permet de récupérer toute les questions et leurs index, puis de les afficher -->
    <div v-for="(question, index) in questions">

    <!-- Permet de n'afficher que la question actuelle -->
    <div v-show="index === questionIndex">
      <!-- Titre de la question -->
      <h4>{{ question.text }}</h4>
          <!-- Permet de récuperer chaque réponse à la question -->
          <div v-for="response in question.responses">
            <label class="color2">
              <input type="radio" v-bind:value="response.correct" v-bind:name="index" v-model="userResponses[index]">{{response.text}}
            </label>
          </div>
        <!-- Permet d'aller à la question suivante -->
        <button class="waves-effect waves-light btn bg-color1" v-on:click="questionIndex++"><i class="material-icons right">keyboard_arrow_right</i>Suite</button>
      </div>
    </div>
    <!-- Quand il n' a plus de questions, affiche la page du score -->
    <div v-show="questionIndex === this.questions.length">
      <h4>
      Vous avez fini !
      </h4>
      <h5>
        Votre score est de : <span class="color2 bold">{{ score() }} / {{ this.questions.length }}</span>
      </h5>
      <!-- Permet de retourner sur la page principale -->
      <router-link to="/" class="waves-effect waves-light btn bg-color1"><i class="material-icons right">home</i>Accueil</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Questionnaire',
  data () {
    return {
      msg  : 'Bienvenue sur cette leçon concernant les bases du JSON',
      questionIndex : 0,
      questions: [
        {
          text: "Que signifie JSON ?",
          responses: [
            {text: 'JavaScript Observation Notation', correct: false},
            {text: 'C\'est "JASON" mais ils ont oubliés une lettre'},
            {text: 'JavaScript Object Notation', correct: true}
          ]
        }, {
          text: "Combien de type de base le JSON supporte t-il ?",
          responses: [
            {text: '42', correct: false},
            {text: '6', correct: true},
            {text: '13'}
          ]
        }, {
          text: "À quoi sert l'opérateur TypeOf ?",
          responses: [
            {text: 'Connaître le type d\'un élément', correct: true},
            {text: 'Connaître le type d\'un Pokémon', correct: false},
            {text: 'Obtenir les propriétés d\'un objet'}
          ]
        }, {
          text: "Qu'est ce que contient un objet ?",
          responses: [
            {text: 'Des Dinosaures disparus', correct: false},
            {text: 'Des Propriétés et des Méthodes', correct: true},
            {text: 'Des Références'}
          ]
        }, {
          text: "Quel mot clé permet de faire du Ciblage Interne ?",
          responses: [
            {text: 'toes', correct: false},
            {text: 'that'},
            {text: 'this', correct: true}
          ]
        }, {
          text: "Laquelle de ces syntaxe de déclaration d'objet est vraie ?",
          responses: [
            {text: 'var Anakin = Object;', correct: false},
            {text: 'var player = {};', correct: true},
            {text: 'new Object() = player;'}
          ]
        }, {
          text: "Laquelle de ces syntaxe permet de lire les propriétes d'un objet ?",
          responses: [
            {text: 'var age = player[\'age\'];', correct: true},
            {text: 'properties[player]', correct: false},
            {text: 'see Object() = player;'}
          ]
        }, {
          text: "Peut-on utiliser les même syntaxes pour lire et modifier les objets ?",
          responses: [
            {text: 'Non'},
            {text: 'Oui', correct: true}
          ]
        }, {
          text: "Comment supprimer t'on la propriété d'un objet ?",
          responses: [
            {text: 'On ne peut pas', correct: false},
            {text: 'remove player.weapon'},
            {text: 'delete player.weapon', correct: true}
          ]
        }
      ],
      userResponses: 0
    }
  },
  created () {
    // Permet d'initialiser le tableau des reponses de l'utilisateur
    this.userResponses = Array(this.questions.length).fill(false)

  },
  methods: {
    // Permet de calculer le score en fonction des réponses de "userResponses" || true = bonne réponse & false = mauvaise réponse
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Permet de supprimer le fait que Materialize masque les inputs radio  */
[type="radio"]:not(:checked), [type="radio"]:checked {
    position: inherit!important;
    left: inherit!important;
    opacity: 1;
    margin-right: 0.5em;
}
</style>
