<template>
  <div class="revisaoCadastro">
    <BotaoSeta rota="/atendimento" label="<" />
    <Revisao />
    <div class="foto"></div>
  </div>
</template>

<script>
import BotaoSeta from "@/components/BotaoSeta.vue";
import Revisao from "@/components/Revisao.vue";
export default {
  components: { BotaoSeta, Revisao },
};
</script>

<style scoped>
.revisaoCadastro {
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  height: auto;
  margin: 4em 0 0 0;
  color: rgb(1, 24, 24);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
  padding: 0.7em 1em 0 1em
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .revisaoCadastro {
    width: 70em;
    height: 62em;
    border-radius: 40px;
    margin: 5em auto;
    padding: 1em 2em 0 4em;
  }

  .foto {
    background-image: url(https://github.com/elielm14/facil-consulta/blob/master/src/assets/desktop-pagina-3.png?raw=true);
    background-repeat: repeat;
    background-size: cover;
    width: 41em;
    height: 25em;
    position: relative;
    top: -45em;
    left: 23em;
  }
}
</style>

