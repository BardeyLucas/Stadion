<template>
    <div class="grille">
        <img class="mt-14 mb-24 col-span-2 h-[229px] w-full col-start-6" />
        <form class="col-start-3 col-span-8 mb-9">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="email"
                placeholder="E-mail ou n° de téléphone">
        </form>
        <form class="col-start-3 col-span-8">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="password"
                placeholder="Mot de passe">
        </form>
        <button class="mt-12 h-10 col-span-2 col-start-6 bg-Gold">SE CONNECTER</button>
        <div class="col-span-12 flex mt-12 mb-7 gap-x-1 mx-auto">
            <RouterLink to="/Inscription" ><h3 class="text-Gold">Créer un compte</h3></RouterLink>
            <h3 class="text-White">sur Stadion</h3>
        </div>
        <RouterLink to="/mdp" class="col-span-12  mb-80 text-center"><h3 class="text-Gold">Mot de passe oublié</h3></RouterLink>
</div>
</template>