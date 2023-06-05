<script setup lang='ts'>
import Hero from '@/components/Hero.vue';
</script>
<template>
    <Hero />
    <div class="py-24 grille text-White gap-y-12">
        <div class="col-span-7">
            <h3 class="mt-20 mb-9">Profil personnalisés</h3>
            <p>Vous pouvez maintenant personnaliser votre bannière en plus de votre photo de profil</p>
        </div>
        <img class="col-span-5 h-64 border-2" />
        <img class="col-span-5 h-64 border-2" />
        <div class="col-span-7 text-end">
            <h3 class="mt-20  mb-9">Assistance prioritaire et participation au développement du site</h3>
            <p>En cas de problème vous serez prioritaire et vous aurez aussi la possibilité de suggérer des services ou
                autres pour le site, tel que de nouveaux jeux ont ajouté.</p>
        </div>
        <div class="col-span-7">
            <h3 class="mt-20  mb-9">Inscriptions anticipées aux tournois et exclusivité</h3>
            <p>Vous pouvez vous inscrire en avance aux tournois afin d’être sûr de pouvoir y participer. Participer à des
                tournois uniquement disponibles aux abonnés</p>
        </div>
        <img class="col-span-5 h-64 border-2" />
        <h2 class="col-span-12">Nos offres</h2>
        <div class="h-[600px] col-span-4 col-start-2 bg-DarkGray">
            <div class="text-center w-full h-24 bg-Gray text-Black pt-7">
                <h2>Gratuit</h2>
            </div>
            <p class="py-8 px-7">Vous aurez accès aux principaux accès de notre site sans aucuns avantages.</p>
            <h2 class="py-8 px-7">0€</h2>
            <div class="w-full text-center text-Black">
                <button class="w-44 h-11 bg-Gold my-12">COMMENCER</button>
            </div>
            <ul class="px-10 list-disc">
                <li>Accès aux tournois</li>
                <li>Accès au classement</li>
                <li>Accès aux profils joueurs </li>
                <li>Publicités</li>
            </ul>
        </div>
        <div class="h-[600px] col-span-4 col-start-8 bg-DarkGray">
            <div class="text-center w-full h-24 bg-Gold text-Black pt-7">
                <h2>Premium</h2>
            </div>
            <p class="py-8 px-7">Profitez des avantages du premium.</p>
            <h2 class="py-8 px-7">4,99€ /mois</h2>
            <div class="w-full text-center text-Black">
                <button class="w-44 h-11 bg-Gold my-12">COMMENCER</button>
            </div>
            <ul class="px-10 list-disc">
                <li>Profils personnalisés</li>
                <li>Assistance prioritaire et participation au développement du site</li>
                <li>Inscriptions anticipées aux tournois et exclusivité</li>
            <li>Pas de publicités</li>
        </ul>
    </div>
</div></template>