<template>
 <router-view/>
 
</template>

<script setup>
window.addEventListener('scroll', function () {
    let elements = document.getElementsByClassName('noVisible');
    let screenSize = window.innerHeight;
  
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      
      if (element.getBoundingClientRect().top + (screenSize / 3) < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
  });
  


</script>

<style lang="scss">
body{
    background: $blueBackground;
}
span{
    color: rgb(233, 219, 101);
  font-family: sans-serif;
  
}
.titulos{
  font-family: $titleFont;
  text-shadow: $titleColor;
  color: white;
}
.noVisible{
  opacity: 0;
  transform: translate(-10vh, 0vh);
  transition: all 1s;
}
.visible{
  opacity: 1;
  transform: translate(0, 0);
}

</style>
