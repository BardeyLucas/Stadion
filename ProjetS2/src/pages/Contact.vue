<script setup lang="ts">
import Hero from '@/components/Hero.vue';
</script>
<template>
    <Hero />
    <div class="grille text-White">
        <h3 class="mt-24 col-span-12">Formulaire de contact</h3>
        <p class="my-12 col-span-11 col-start-2">Vous trouverez ici notre formulaire de contact afin de pouvoir communiqué
            avec pour poser des questions, donner un avis ou autres.</p>
        <div class="col-span-12 bg-DarkGray px-28 py-20 mb-24">
            <form class="w-full border-b-2 border-White mb-11">
                <input class="text-White w-full h-16 bg-DarkGray border-2 border-DarkGray" type="password"
                    placeholder="Votre nom*">
            </form>
            <form class="w-full border-b-2 border-White mb-11">
                <input class="text-White w-full h-16 bg-DarkGray border-2 border-DarkGray" type="password"
                    placeholder="Votre e-mail*">
            </form>
            <form class="w-full border-b-2 border-White mb-11">
                <input class="text-White w-full h-16 bg-DarkGray border-2 border-DarkGray" type="password"
                    placeholder="Objet*">
            </form>
            <form class="w-full border-b-2 border-White h-52 mb-20">
                <input class="text-White items-start w-full h-16 bg-DarkGray border-2 border-DarkGray" type="password"
                    placeholder="Votre message">
            </form>
            <button class="h-9 w-40 text-center text-Black bg-Gold">ENVOYER</button>
        </div>
    </div>
</template>