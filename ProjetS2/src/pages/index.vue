<!-- <script setup lang="ts">
import GameCard from '../components/Game-Card.vue'
import TournamentCard from '../components/Tournament-Card.vue'
import ProfilCard from '../components/Profil-Card.vue'
import Lol from '../../public/img/Icones-interface/icones/Lol.vue'
import Lieu from '../../public/img/Icones-interface/icones/Lieu.vue'
import Date from '../../public/img/Icones-interface/icones/Date.vue'
import Team from '../../public/img/Icones-interface/icones/Team.vue'
import Rank from '../../public/img/Icones-interface/icones/Rank.vue'
import Inscription from '../../public/img/Icones-interface/icones/Price.vue'
</script>
<template>
  <main class="grille grid text-White">
    <h1 class="text-White text-center py-12 col-span-12">Tournois près de chez vous</h1> 
    <div class="col-span-12 grid grid-flow-col grille bg-DarkGray gap-y-0">
        <form class="z-0 border-2 border-White col-span-8 row-span-1 h-12 -mb-96">
          <div class="bg-Black">
            <label for="search"></label>
            <input class="bg-Black h-11 px-5" type="search" name="search" id="search" placeholder="Recherche tournois">
          </div>
        </form>
        <div class="bg-Gray col-span-8 row-span-5 -mt-28"></div> 
        <div class="col-span-4 row-span-6 text-center">
          <h2 class="font-bold w-52 mt-2 mx-auto">Tournois Lol Championship</h2>
          <div class="flex flex-row gap-12 mt-8 justify-center">
            <Lol/>
            <div class="text-start w-48">
              <p>Jeu</p>
              <p class="text-Gold">League of legends, EUNE</p>
            </div>
          </div>
          <div class="flex flex-row gap-12 mt-8 justify-center">
            <Lieu/>
            <div class="text-start w-48">
              <p>Lieu</p>
              <p class="text-Gold">France, Montbéliard</p>
            </div>
          </div>
          <div class="flex flex-row gap-12 mt-8 justify-center">
            <Date/>
            <div class="text-start w-48">
              <p>Dates</p>
              <p class="text-Gold">25 juin 2023, 10h10</p>
            </div>
          </div>
          <div class="flex flex-row gap-12 mt-8 justify-center">
            <Team/>
            <div class="text-start w-48">
              <p>Taille d'équipe</p>
              <p class="text-Gold">5V5</p>
            </div>
          </div>
          <div class="flex flex-row gap-12 mt-8 justify-center">
            <Rank/>
            <div class="text-start w-48">
              <p>Rang</p>
              <p class="text-Gold">Unranked - challenger</p>
            </div>
          </div>
          <div class="flex flex-row gap-12 mt-8 justify-center">
            <Inscription/>
            <div class="text-start w-48">
              <p>Inscription</p>
              <p class="text-Gold">Accès gratuit</p>
            </div>
          </div>
          <button class="text-Black bg-Gold h-10 leading-10 w-44 mt-8 mb-12">En savoir plus</button>
        </div>
      </div>
    <div class="col-span-12 text-center mt-24 mb-12">
      <h2>Jeux associés</h2>
    </div>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
    <div class="col-span-12 inset-x-0 gap-5 flex flex-row justify-center my-12">
        <div class="w-2.5 h-2.5 rounded-md bg-Gold"></div>
        <div class="w-2.5 h-2.5 rounded-md bg-Gold"></div>
    </div>
        <div class="col-span-12 text-center mt-24 mb-12">
          <h2>Tournois disponible</h2>
        </div>
      <TournamentCard/>
      <TournamentCard/>
      <TournamentCard/>
      <TournamentCard/>
      <TournamentCard/>
      <TournamentCard/>
      <TournamentCard/>
      <TournamentCard/>
        <div class="col-span-12 text-center mt-12">
          <button class="text-Black bg-Gold h-10 leading-10 w-44">VOIR PLUS</button>
        </div>
        <div class="col-span-12 text-center mt-24">
          <h2>Classement</h2>
        <div class=" flex justify-between bg-DarkGray mt-12">
          <button class="w-1/6 h-10 leading-10">Tous les jeux</button>
          <button class="w-1/6 h-10 leading-10">League of legends</button>
          <button class="w-1/6 h-10 leading-10">sUPER sMASH brOS</button>
          <button class="w-1/6 h-10 leading-10">Overwatch 2</button>
          <button class="w-1/6 h-10 leading-10">sTREET FIGHTER</button>
          <button class="w-1/6 h-10 leading-10">Valorant</button>
          </div>
        </div>
          <ProfilCard class="col-start-3"/>
          <ProfilCard class="col-start-6"/>
          <ProfilCard class="col-start-9"/>
        <div class="col-span-12 text-center mt-12">
          <button class="text-Black bg-Gold h-10 leading-10 w-44">VOIR PLUS</button>
        </div>
        <div class="col-span-12 text-center mt-12">
          <h2>Pourquoi acheter l’abonnement Premium ?</h2>
          <h3 class="mt-5">Avec l’abonnement Premium vous pouvez...</h3>
        </div>
          <div class="mt-24 col-span-12 grid grid-flow-col grille">
              <h3 class="col-start-2 col-span-5 row-span-1">Vous mettre en avant pour être recruté par des équipes E-sport</h3>
              <p class="col-start-3 col-span-5 row-span-1">Vous cherchez à vous lancer dans l’e-sport. Stadion est là pour vous aider. Grâce à la mise en avant de votre profil personnalisé, nous vous aiderons à rentrer en contact avec des équipes professionnelles en tant que joueurs ou coach.</p>
              <img class="col-start-9 col-span-3 row-span-3" src="../../public/img/Images/AllPlatform/Photo-Joueur.png"/>
          </div>
          <div class="mt-12 col-span-12 grid grid-flow-col grille">
            <img class="col-start-2 col-span-3 row-span-3" src="../../public/img/Images/AllPlatform/Photo-Team.png"/>
            <h3 class="col-start-6 col-span-5">Vous aider a recruter des joueurs ou des coachs</h3>
            <p class="col-start-7 col-span-5">À la recherche d’un nouveau membre dans votre équipe. Joueurs ou coachs, aucun problème avec notre moteur
              de recherche.
              Celui-ci vous permettra de faire des recherches rapidement et détaillées afin de trouver la personne
              idéal pour compler ce vide.</p>
            </div>
          <div class="mt-12 col-span-12 grid grid-flow-col grille">
            <h3 class="col-start-2 col-span-5">Vous permettre de mettre en avant vos tournois</h3>
            <p class="col-start-3 col-span-5">Vous recherchez à mettre plus en avant votre tournois. Stadion vous aidera à agrandir votre visibilité en
              mettant en avant votre tournois sur notre site.</p>
              <img class="col-start-9 col-span-3 row-span-3" src="../../public/img/Images/AllPlatform/Photo-Organisateur.png"/>
          </div>
          <div class="col-span-12 text-center mt-12 mb-24">
          <button class="text-Black bg-Gold h-10 leading-10 w-44">Abonnement</button>
        </div>
      </main>
</template> -->

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ArticleHero from '@/components/Article-Hero.vue';
import ClassCardTournois from '@/components/Class-Card-Tournois.vue';
import ProfilCard from '@/components/Profil-Card.vue'
</script>

<template>
  <ArticleHero />
  <div class="grille">
    <h2 class="col-span-12 text-center">Tournois disponible</h2>
    <ClassCardTournois />
    <ClassCardTournois />
    <ClassCardTournois />
    <ClassCardTournois />
    <ClassCardTournois />
    <button class="text-Black bg-Gold h-10 leading-10 col-span-2 col-start-6">VOIR PLUS</button>
  </div>
  <div class="grille">
    <h2 class="col-span-12 text-center">Meilleur joueur</h2>
    <ProfilCard />
    <ProfilCard />
    <ProfilCard />
    <button class="text-Black bg-Gold h-10 leading-10 col-span-2 col-start-6">VOIR PLUS</button>
  </div>
</template>