<template>
  <div class="atendimento">
    <Valores />
  </div>
</template>

<script>
import Valores from '@/components/Valores.vue'

export default {
  name: 'Home',
  components: {
    Valores
  }
}
</script>

<style scoped>
.atendimento{
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  height: 100vh;
  margin: 4em 0 0 0;
  color: rgb(1, 24, 24);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
  padding: .7em 1em 0 1em;
}
</style>