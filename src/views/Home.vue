<template>
  <div class="home">
    <Cadastro class="conteudo"/>
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
  height: 90vh;
  margin: 5.5em 0 0 0;
  color: rgb(1, 24, 24);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
}
</style>
