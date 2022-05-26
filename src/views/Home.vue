<template>
  <div class="home">
    <Cadastro class="conteudo" />
  </div>
</template>

<script>
import Cadastro from '@/components/Cadastro.vue'

export default {
  name: 'Home',
  components: {
    Cadastro
  }
}
</script>

<style scoped>
.home {
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  height: auto;
  margin: 4em 0 0 0;
  color: rgb(1, 24, 24);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
  padding: 2em 1em 0 1em;
}
@media only screen and (min-width: 1024px) and (max-width: 1440px){
  .home{
    width: 70em;
    height: 50em;
    border-radius: 40px;
    margin: 5em auto;
    padding: 2em 2em 0 5em;
  }
}
</style>
