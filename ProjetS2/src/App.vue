<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './components/Header.vue'
import FooterPage from './components/Footer.vue'
import GameCard from './components/Game-Card.vue'
import TournamentCard from './components/Tournament-Card.vue'
import ProfilCard from './components/Profil-Card.vue'
</script>
<template>
  <HeaderPage/>
  <body>
    <h1 class="bg-Black">Carte des tournois près de chez vous</h1>
    <div>
      <h2>Jeux associés</h2>
    </div>
  <GameCard/>
  <GameCard/>
  <GameCard/>
  <GameCard/>
    <div>
      <h2>Tournois disponible</h2>
  <TournamentCard/>
  <TournamentCard/>
  <TournamentCard/>
  <TournamentCard/>
  <TournamentCard/>
  <TournamentCard/>
  <TournamentCard/>
  <TournamentCard/>
      <button>VOIR PLUS</button>
    </div>
    <div>
      <h2>Classement</h2>
      <button>Général</button>
      <button>League of legends</button>
      <button>sUPER sMASH brOS</button>
      <button>Overwatch 2</button>
      <button>sTREET FIGHTER</button>
      <ProfilCard/>
      <ProfilCard/>
      <ProfilCard/>
      <button>VOIR PLUS</button>
    </div>
    <div>
      <h2>Pourquoi acheter l’abonnement Premium ?</h2>
      <h3>Avec l’abonnement Premium vous pouvez...</h3>
      <div>
        <h3>Vous mettre en avant pour être recruté
          par des équipes Esport</h3>
        <p>Vous cherché à vous lancer dans l’esport. Stadion est là pour vous aider.
          Grâce à la mise en avant de votre profil personnalisé, nous vous aiderons à rentrer en contact avec des
          équipes professionnelles en temps que joueurs ou coach.</p>
      </div>
      <div>
        <h3>Vous aider a recruter des joueurs ou des coachs</h3>
        <p>À la recherche d’un nouveau membre dans votre équipe. Joueurs ou coachs, aucun problème avec notre moteur
          de recherche.
          Celui-ci vous permettra de faire des recherches rapidement et détaillées afin de trouver la personne
          idéal pour compler ce vide.</p>
      </div>
      <div>
        <h3>Vous permettre de mettre en avant vos tournois</h3>
        <p>Vous recherchez à mettre plus en avant votre tournois. Stadion vous aidera à agrandir votre visibilité en
          mettant en avant votre tournois sur notre site.</p>
      </div>
      <button>Abonnement premium</button>
    </div>
  </body>
  <FooterPage/>
</template>