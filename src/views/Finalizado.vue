<template>
  <div class="finalizado">
    <BotaoSeta rota="/" label="<" />
    <Final/>
  </div>
</template>

<script>
import BotaoSeta from "@/components/BotaoSeta.vue";
import Final from "@/components/Final.vue";
export default {
  components: { BotaoSeta, Final },
};
</script>
<style scoped>
.finalizado {
   background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  height: 100vh;
  margin: 4em 0 0 0;
  color: rgb(1, 24, 24);
 box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
  padding: 0.7em 1em 0 1em
}
@media only screen and (min-width: 1024px) and (max-width: 1440px){
  .finalizado{
    width: 40em;
    height: 40em;
    border-radius: 40px;
    margin: 5em auto;
    padding: 0.7em 2em 1em 2em
  }
}
</style>
