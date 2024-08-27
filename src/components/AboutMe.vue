<template>
  <div class="section about">
    <div class="about-img">
      <img src="/src/assets/images/profilCarre.jpg" alt="photo-profil">
    </div>

    <div class="my-info">
      <div class="my-info1">
        <h5 class="info-title"> <i class="fa fa-bolt"></i> A PROPOS </h5>
        <h4> Je suis <span> Développeur web junior</span> </h4>
        <div class="contact">
          <div class="email">
            <i class="fa fa-envelope"></i>
            <div class="text">
              <h3> Email</h3>
              <h3>support@gmail.com</h3>
            </div>
          </div>
          <div class="phone">
            <i class="fa fa-phone"></i>
            <div class="text">
              <h3> Phone</h3>
              <h3>0677777777</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="my-info2">
        <div class="resume-header">
          <a class="h4-resume-title" href="https://github.com/Mauricette-g/Main" target="_blank"><i class="fa fa-address-card"></i> Mon CV </a>
          <h2>Formations et Expériences pro</h2>
        </div>
        <div class="resume-cards">
          <h3 class="c1"> 2020-present</h3>
          <h3> Datamanager</h3>
          <h3>[ Au GHU Paris Psychiatrie et Neurosciences Paris ]</h3>
          <p> Création de bases de données cliniques (eCRF), maintenance de la base de données. <br> Analyse statistique de données <br> Webmaster site du C3RP <br> Création d'un outil Parcours-patient </p>
        </div>
        <div class="resume-cards">
          <h3 class="c1"> 2019-2020</h3>
          <h3> Enseignante Excel et VBA</h3>
          <h3>[ A INSEEC MBA SCHOOL Paris ]</h3>
          <p> En charge des cours de Excel et VBA niveau Licence et Master.</p>
        </div>
        <div class="resume-cards">
          <h3 class="c1"> 2017-2019</h3>
          <h3> Etudiante en Bioinformatique </h3>
          <h3>[A Sorbonne Université - Pierre et Marie Curie ]</h3>
          <p></p>
        </div>
      </div>

    </div>
        
  </div>
</template>

<style>

.about{
  display: flex;
  justify-content: space-between;
  padding:80px 5% ;
  gap: 100px;
  background-color: #FFF;
  color: #123d5a;
}

.my-info{
  display: flex;
  justify-content: space-around;
  align-items: start;
  gap: 25px;
  flex-direction: column;
  overflow:visible ;
  border: 3px solid #123d5a;
  padding: 20px;
}

.my-info::-webkit-scrollbar{
  background-color:#123d5a;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 0%;
  height: 0%;
}


.my-info1{
  display: flex;
  justify-content: space-around;
  align-items: start;
  gap: 30px;
  flex-direction: column;
  width: 100%;
}

.info-title{
  border: 2px solid #123d5a;
  padding: 20px 30px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
}

.about-img{
  height: 600px;
  width: 50%;
  object-fit: cover;
  position: sticky;
}

.about-img :nth-child(1){
  width: 100%;
  height: 100%;
  border-radius: 500px;
  border: 2px dashed #123d5a;
  padding: 15px;
  object-fit: cover;
  object-position: top;
}

.contact{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  margin: 10px;
  border-radius: 20px;
  border: 2px dashed #123d5a;
}

.email{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.email i{
  font-size: 20px;
  color: #123d5a;
}

.phone{
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.phone i{
  font-size: 20px;
  color: #123d5a;
}

.text{
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 5px;
  flex-direction: column;
  font-weight: bold;
}

.my-info2{
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: column;
  gap: 25px;
}

.resume-header{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
}

.resume-header button i{
  margin: 5px;
  font-size: 20px;
}

.h4-resume-title{
  display: inline-block;
  font-size: 20px;

}

.resume-cards{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
}

.c1{
  color: #123d5a;
}
.resume-cards p{
  font-size: 15px;
  font-weight: 400;

}

</style>
