<script setup lang="ts">
import { RouterView } from 'vue-router'
import TournoisHero from '@/components/Tournois-Hero.vue';
import TournamentCard from '@/components/Tournament-Card.vue'
</script>
<template>
    <TournoisHero />
    <div class="grille">
        <div class="text-White col-span-7 mt-24">
            <h2>Informations générales</h2>
            <div>
                <h3 class="mt-12">Lieu</h3>
                <p class="text-Gold mt-2.5 w-80">France, 6 Rue du Commandant Pierre Rossel, 25200 Montbéliard</p>
            </div>
            <div class="my-12">
                <h3 class="mb-2.5">Nombre d’équipe</h3>
                <div class="flex">
                    <p class="mr-3 ml-1">Inscrit(e)</p>
                    <p class="text-Gold mr-10">5</p>
                    <p class="mr-3">Emplacements</p>
                    <p class="text-Gold">24</p>
                </div>
            </div>
            <div>
                <h3 class="mb-2.5">Inscription</h3>
                <div class="flex gap-x-52">
                    <div class="ml-1">
                        <p>Début d’incription</p>
                        <p class="text-Gold">24 avril 2023</p>
                    </div>
                    <div>
                        <p>Fin d’incription</p>
                        <p class="text-Gold">20 juin 2023</p>
                    </div>
                </div>
                <div class="h-2.5 w-[475px] bg-DarkGray rounded"></div>
                <div class="h-2.5 w-14 bg-Blue rounded-s -mt-2.5"></div>
            </div>
            <div class="mt-12">
                <h3>Règles</h3>
                <ul class="list-disc ml-5">
                    <li class="mt-2.5">Un retard de plus de 10 min ou une absence non annoncée en avance sera sanctionné
                        d’une expulsion du tournoi et d’une interdiction de participer au suivant. Il faudra donc ne pas
                        oublier de prévenir le staff du tournoi avant le match dans ce cas-là.</li>
                    <li class="mt-2.5">Dodge la game durant la sélection des champions aura pour résultat la
                        disqualification du joueur sauf si c’est lié à un problème technique.</li>
                    <li class="mt-2.5">La tricherie, toxicité ou utilisation de plusieurs comptes auras pour conséquence la
                        disqualification du joueur et aussi un signalement.</li>
                    <li class="mt-2.5">Commencer la partie en même temps que votre adversaire sinon la partie est perdue.
                    </li>
                    <li class="mt-2.5">Les lobbies privés/personnalisés seront utilisés pour accueillir le match.</li>
                    <li class="mt-2.5">L'équipe qui n'accueille pas le match choisira son camp.</li>
                    <li class="mt-2.5">Les équipes seront classées au hasard à la clôture des inscriptions.</li>
                </ul>
            </div>
        </div>
        <div class="text-White col-span-3 col-start-10 flex flex-col mt-24">
            <h2 class="w-full text-center text-White mb-12">Format</h2>
            <div class="flex h-12 gap-x-12 mb-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Jeux</h3>
                    <p class="text-Gold">League of legends, EUNE</p>
                </div>
            </div>
            <div class="flex h-12 gap-x-12 mb-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Date</h3>
                    <p class="text-Gold">25 juin 2023, 10h00</p>
                </div>
            </div>
            <div class="flex h-12 gap-x-12 mb-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Taille d'équipe</h3>
                    <p class="text-Gold">5v5</p>
                </div>
            </div>
            <div class="flex h-12 gap-x-12 mb-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Rang</h3>
                    <p class="text-Gold">Unranked - challenger</p>
                </div>
            </div>
            <div class="flex h-12 gap-x-12 mb-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Format</h3>
                    <p class="text-Gold">Élimination directe</p>
                </div>
            </div>
            <div class="flex h-12 gap-x-12 mb-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Inscription</h3>
                    <p class="text-Gold">Accès gratuit</p>
                </div>
            </div>
            <div class="flex h-12 gap-x-12">
                <img class="h-12 w-12">
                <div>
                    <h3>Récompenses</h3>
                    <div class="flex gap-x-16">
                        <p>1er</p>
                        <p class="text-Gold">200€</p>
                    </div>
                    <div class="flex gap-x-12">
                        <p>2éme</p>
                        <p class="text-Gold">100€</p>
                    </div>
                <div class="flex gap-x-12">
                    <p>3éme</p>
                    <p class="text-Gold">50€</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 grille px-0">
        <h2 class="col-span-12 text-center text-White mt-24 mb-12">Inscrivez vous à d’autres tournois</h2>
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <button class="mt-12 mb-24 h-10 col-span-2 col-start-6 bg-Gold">VOIR PLUS</button>
    </div>
</div></template>