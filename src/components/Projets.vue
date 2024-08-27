
<template>
  <div class="section skills">
        <h2 class="projects"> Projets </h2>
        <div class="boxed text-center">
            <h2 class="competences"> Compétences techniques </h2> 
            <div class="flex forSkills">
                <div class="skill icon">
                    <img src="/src/assets/images/r-project-icon-size_512.png">
                    <h3>R</h3>
                </div>

                <div class="skill icon">
                    <img src="/src/assets/images/python-icon-size_512.png">
                    <h3>Python</h3>
                </div>

                <div class="skill icon">
                    <img src="/src/assets/images/wordpress-icon-size_512.png">
                    <h3>Wordpress</h3>
                </div>

                <div class="skill icon">
                    <img src="/src/assets/images/html-icon-size_512.png">
                    <h3>HTML</h3>
                </div>

                <div class="skill icon">
                    <img src="/src/assets/images/css3-alt-icon-size_512.png">
                    <h3>CSS</h3>
                </div>

                <div class="skill icon">
                    <img src="/src/assets/images/node-js-icon-size_512.png">
                    <h3>Javascript</h3>
                </div>

            </div>


           <h2 class="project-real"> Mes réalisations </h2> 
           <div class="flex forReal">
              <div class="reals img">
                  <a href="https://c3rp.fr/" target="_blank">
                  <img src="/src/assets/images/c3rp-icon.jpg"> </a>
                  <h3>C3RP</h3>
              </div>
              <div class="reals img">
                 <a href="https://ecrf.ghu-paris.fr/index.php?action=myprojects" target="_blank">
                 <img src="/src/assets/images/RedCap-icon.png"> </a>
                 <h3>SUIREHAB</h3>
              </div>

       </div>

    </div>
  </div>


</template>

<style scoped>

.section{
  display: flex;
  padding: 100px  30px;
  flex-direction: column;
  align-items: center;
  background-color: #123d5a;

}

.projects{
  display: inline-block;
  font-size: 1.5em;
  border-bottom: 4px solid white;
  margin-bottom: 25px;
}


.boxed{
  max-width: 1280px;
  margin-inline: auto;

}

.skills{
  margin-bottom: 10px;
  color: #FFF;
}

.flex{
  display: flex;
}

.title{
  width: 40%;
}

.text-edit{
  width: 60%;
}

.skill{
  width: 20%;
}

.space-between{
  justify-content: space-between;
}

.forSkills, .forReal{
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.text-center{
  text-align: center;
  gap: 25px;
}

.competences, .project-real{
  margin-bottom: 15px;
}

.icon, .reals{
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  aspect-ratio: 1/1;
  object-fit: contain;
  box-sizing: border-box;
  margin-bottom: 30px;

}

.icon img, .reals img{
  width: 100px;
  aspect-ratio: 1/1;
  object-fit: contain;
  border-radius: 20px;
}

.icon h3 , .reals h3{
  color: #123d5a;
  margin-top: 10px;
}




</style>