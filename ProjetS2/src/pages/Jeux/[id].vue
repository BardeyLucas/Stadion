<script setup lang="ts">
import { RouterView } from 'vue-router'
import JeuxHero from '@/components/Jeux-Hero.vue';
import ClassCardTournois from '@/components/Class-Card-Tournois.vue';
import ProfilCard from '@/components/Profil-Card.vue'
</script>

<template>
    <JeuxHero />
    <div class="grille mt-24">
        <h2 class="col-span-12 text-center text-White">Tournois disponible</h2>
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <button class="text-Black bg-Gold h-10 leading-10 col-span-2 col-start-6 mt-12">VOIR PLUS</button>
    </div>
    <div class="grille mt-24">
        <h2 class="col-span-12 text-center text-White mb-12 ">Meilleur joueur</h2>
        <div class="col-span-12 grilleALT gap-x-5">
            <ProfilCard />
            <ProfilCard />
            <ProfilCard />
        </div>
        <button class="text-Black bg-Gold h-10 leading-10 col-span-2 col-start-6 mt-12 mb-24">VOIR PLUS</button>
    </div>
</template>