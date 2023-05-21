<script setup lang="ts">
import { RouterView } from 'vue-router'
import ArticleHero from '@/components/Article-Hero.vue';
import ClassCardTournois from '@/components/Class-Card-Tournois.vue';
import ProfilCard from '@/components/Profil-Card.vue'
</script>
<template>
        <ArticleHero/>
    <div>
        <h2>Tournois disponible</h2>
        <ClassCardTournois/>
        <ClassCardTournois/>
        <ClassCardTournois/>
        <ClassCardTournois/>
        <ClassCardTournois/>
        <button>VOIR PLUS</button>
    </div>
    <div>
        <h2>Meilleur joueur</h2>
            <ProfilCard/>
            <ProfilCard/>
            <ProfilCard/>
        <button>VOIR PLUS</button>
    </div>
</template>