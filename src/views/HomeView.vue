<script setup>
  import AboutMe from '@/components/AboutMe.vue';
  import Projets from '@/components/Projets.vue';
  import Contact from '@/components/Contact.vue';


  let aboutLink = document.getElementById("apropos_link")
  let projetLink = document.getElementById("projet_link")
  let contactLink = document.getElementById("contact_link")

  function activeLink(e){
    e.style.color='#A0006D'
    e.style.textDecoration="none"
    e.style.fontWeight=700
  }

  function removeLink(e){
    e.style.textDecoration="none"
    e.style.fontWeight=400
    e.style.color="#060640"
  }
</script>

<template>
    <AboutMe @pointerenter="activeLink(aboutLink)" @pointerleave="removeLink(aboutLink)"/>

    <Projets @pointerenter="activeLink(projetLink)" @pointerleave="removeLink(projetLink)"/>

    <Contact @pointerenter="activeLink(contactLink)" @pointerleave="removeLink(contactLink)"/>
</template>

<style scoped>

</style>