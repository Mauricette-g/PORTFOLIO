
<template>
  <div class="nav">
    <div class="logo">
            <h1> MIM </h1>
    </div>
      <ul class="menu">
        <router-link id="apropos_link" to="/apropos">A propos</router-link>
        <router-link id="projet_link" to="/projet">Projets</router-link>
        <router-link id="contact_link" to="/contact">Contact</router-link>
      </ul>
  </div>

  <div class="header">
    <img src="/src/assets/images/profil3.jpg" alt="profil-head" class="header-background">
    <div class="header-info">
      <h1> Mauricette Irène MENDY</h1>
      <p> Passionnée de développement d'applications web. <br> Découvrez mon portfolio pour plus d'infos. </p>
    </div>
  </div>
    
</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    cursor: pointer;
}

.header{
  width: 100%;
  height: 80vh;
  aspect-ratio: 16/9;
  background: #FFF;
  position: relative;
  
}

.header-background{
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
}

.header-info{
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  text-align: right;
  color: #FFF;
}

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 5%;
  background: white;
  cursor: pointer;
}

.logo{
  color: #123d5a;
}

ul{
  display: flex;
}

ul a{
  margin: 20px;
  transition: .5s;
}


ul a:hover{
  color: #123d5a;
}

</style>
