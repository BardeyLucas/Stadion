<script setup lang="ts">
import { pb, ListJeux_sans } from '@/backend'
import type { JeuxResponse } from '@/pocketbase-types'
import { RouterView } from 'vue-router'
import ClassCardTournois from '@/components/Class-Card-Tournois.vue';
import ProfilCard from '@/components/Profil-Card.vue'
const props = defineProps<{ id: string}>();
const Jeux = await ListJeux_sans(props.id)
const img0 = Jeux.image_hero
const urlImg0 = img0 && pb.getFileUrl(Jeux, img0, { thumb: '100x200' })
const url = `/Jeux/${props.id}`
</script>

<template>
    <img class="w-full h-[496px]" />
    <div class="grille">
        <div class="col-span-3 -mt-56">
            <img class=" w-60 h-80 rounded-xl"/>
        </div>
        <div class="col-span-8 col-start-4 text-White -mt-20">
            <h1 class="mb-12">Tournois Lol Championship</h1>
            <p>League of Legends (LoL) est un jeu multijoueur qui allie stratégie, travail d'équipe et action palpitante.
                Choisissez parmi une vaste liste de champions puissants, chacun doté de capacités uniques, et engagez-vous
                dans des batailles épiques sur la Faille de l'invocateur. </p>
        </div>
    </div>
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