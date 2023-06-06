<script setup lang="ts">
import logo from '../../public/img/Icones-interface/icones/Logo.vue'
import Instagram from '../../public/img/Icones-interface/reseaux/or/instagram.vue'
import Twitter from '../../public/img/Icones-interface/reseaux/or/twitter.vue'
import youtube from '../../public/img/Icones-interface/reseaux/or/Youtube.vue'
</script>
<template>
    <footer class="bg-Black border-t-2 border-Gold">
        <div class="flex items-center justify-center h-32">
            <logo/>
        </div>
        <nav class="text-Gold grid grid-cols-3 justify-items-center px-52 mt-6">
            <div class="col-span-1 w-44">
                <h2>JEUX</h2>
                <p>League of legend</p>
                <p>Super smash bors ultimate</p>
                <p>Valorant</p>
                <p>Street fighter</p>
                <p>Overwatch 2</p>
            </div>
            <div class="col-span-1 w-44">
                <h2>STATISTIQUES</h2>
                <RouterLink to="/Classement" ><p>Classement</p></RouterLink>
                <RouterLink to="/" ><p>Trouver un tournois</p></RouterLink>
            </div>
            <div class="col-span-1 w-44">
                <h2>PREMIUM</h2>
                <RouterLink to="Premium" ><p>Abonnement</p></RouterLink>
            </div>
            <div class="col-span-12 flex gap-x-12 mt-12">
                <Instagram/>
                <Twitter/>
                <youtube/>
            </div>
            <div class="flex gap-56 col-span-3 justify-center mt-12">
                <RouterLink to="Contact" ><p>Nous contacter</p></RouterLink>
                <RouterLink to="Politique-confidentiel" ><p>Politique de confidentialité</p></RouterLink>
                <RouterLink to="A-propos" ><p>Qui somme nous ?</p></RouterLink>
            </div>
            <div class="col-span-12 justify-center mt-9">
                <p>@ 2023 Stadion. Tous droits réservés.</p>
            </div>
        </nav>
    </footer>
</template>