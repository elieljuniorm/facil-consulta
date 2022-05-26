<template>
  <div class="atendimento">
    <BotaoSeta rota="/" label="<" />
    <Valores />
    <div class="foto"></div>
  </div>
</template>

<script>
import Valores from '@/components/Valores.vue'
import BotaoSeta from "@/components/BotaoSeta.vue";

export default {
  name: 'Home',
  components: {
    Valores,
    BotaoSeta
  }
}
</script>

<style scoped>
.atendimento {
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  height: auto;
  margin: 4em 0 0 0;
  color: rgb(1, 24, 24);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
  padding: .7em 1em 0 1em;
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .atendimento {
    width: 70em;
    height: 50em;
    border-radius: 40px;
    margin: 5em auto;
    padding: 1em 2em 0 4em;
  }
  .foto {
    background-image: url(https://github.com/elielm14/facil-consulta/blob/master/src/assets/desktop-pagina-2.png?raw=true);
    background-repeat: repeat;
    background-size: cover;
    width: 32em;
    height: 23em;
    position: relative;
    top: -33em;
    left: 32em;
  }
}
</style>