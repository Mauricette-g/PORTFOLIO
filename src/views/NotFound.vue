

<template>
    <div>
        <RouterLink class="error404" to="/">
            <h2 class="title">ERROR-404</h2>
            <p class="error404-1">Revenir sur le site</p>
        </RouterLink>
    </div>
</template>

<style scoped>

    div{
        margin: 15px;
    }

    .title{
        display: inline-block;
        font-size: 1.5em;
        margin-bottom: 25px;
    }

    .error404 {
        background-image: url(/src/assets/images/profil3.jpg);
        background-origin: content-box;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 2em;
        padding: 15vh 0;
        margin: auto;
        text-decoration: none;
        border-radius: 35%;
        box-shadow: -4px 4px 25px #060640;
    }

    img {
        width: 50%;
        height: auto;
        border-radius: 35%;
        box-shadow: -4px 4px 25px #060640;
    }

    .title {
        font-size: 2em;
    }

    @media screen and (max-width: 480px) {
        .error404 {
            width: 100%;
            padding: 5vh 0;
            margin-top: 25%;
        }
    }
</style>