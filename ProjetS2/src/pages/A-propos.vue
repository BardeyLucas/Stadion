<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import instagram from '../../public/img/Icones-interface/reseaux/or/instagram.vue';
import discord from '../../public/img/Icones-interface/reseaux/or/discord.vue';
import linkedin from '../../public/img/Icones-interface/reseaux/or/Linkedin.vue';
import Lucas from '../../public/img/Images/AllPlatform/Lucas.vue';
import Vi from '../../public/img/Images/AllPlatform/Vi.vue';
</script>
<template>
    <Hero />
    <div class="grille text-White">
        <h2 class="mt-24 col-span-12">Nos objectifs</h2>
        <p class="mt-12 col-span-11 col-start-2">Nous avons pour objectif de rendre le monde de l’e-sport plus accessible à
            tous. Nous avons donc créé une plateforme permettant aux joueurs d’accéder facilement à cet univers.En leurs
            proposants un grand nombre de tournois en France et surtout près de chez eux. </p>
        <p class="mb-12 col-span-11 col-start-2">Ainsi le monde de l’e-sport s’ouvre à tout le monde et de plus nous voulons
            pouvoir aider les joueurs, les organisateurs et les développeurs de jeux à mieux se faire connaître et/ou les
            rendre plus accessibles.</p>
        <h2 class="mt-24 col-span-12">Qui sommes nous ?</h2>
        <p class="mt-12 col-span-11 col-start-2 mb-12">Nous sommes une équipe de jeunes étudiants, qui ont pour objectifs de
            mettre en place ce projet pour leur cursus scolaire et aussi pour proposer ce service à différentes personnes.
            Nous sommes passionnés par les jeux vidéo et l’e-sport, c’est pour cela où nous avons commencé ce projet. Notre
            équipe</p>
        <div class="col-span-5 col-start-2">
            <Lucas class="mx-auto mb-7"/>
            <p class="font-bold mb-6">Lucas BARDEY</p>
            <p class="mb-6">Le développeur</p>
            <p class="mb-6">Bio</p>
            <p class="mb-6">J’ai actuellement 19 ans et je suis étudiant en MMI.</p>
            <p class="mb-6">Je suis principalement passionné par les jeux vidéo, les mangas et la randonnée.</p>
            <p class="mb-6">Au niveau jeux vidéo compétitifs, je m'intéresse principalement à la scène e-sport de super
                smash bros ultimate/mêlée et au speed running.</p>
            <p class="mb-7">Et mon but dans la vie est toujours de devenir plus tard level designer</p>
            <div class="flex gap-x-9 mb-24">
                <instagram/>
                <discord/>
                <linkedin/>
            </div>
        </div>
        <div class="col-span-5 col-start-8">
            <Vi class="mx-auto mb-7"/>
            <p class="font-bold mb-6">Viktor GHIRARDELLI</p>
            <p class="mb-6">Le designer</p>
            <p class="mb-6">Bio</p>
            <p class="mb-6">Je suis un étudiant de première année en MMI âgé de 22 ans.</p>
            <p class="mb-6">Mes passions se résument par le dessin, les mangas et les jeux vidéo.</p>
            <p class="mb-24">Cette passion pour les jeux vidéo m’a amené vers la découverte de l’e-sport. Pour ma part c’est
                essentiellement l’e-sport de League of legends que je suis de manière assidue.</p>
            <div class="flex gap-x-9 mb-24 mt-[100px]">
            <discord/>
            <linkedin/>
        </div>
    </div>
    <p class="col-span-12 mb-24">On vous souhaite de passer un agréable moment sur notre site internet !</p>
</div>
</template>
