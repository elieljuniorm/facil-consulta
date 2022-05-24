<template>
  <div>
    <b-form inline>

      <Especialiades />

      <label class="sr-only" for="inline-form-input-username">Informe o preço da consulta</label>
      <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input id="inline-form-input-username" placeholder="Valor"></b-form-input>
      </b-input-group>

      <Pagamento />
      <Parcelamento />
      <Progess :etapa="2" />
      <Botao rota="/" label="PRÓXIMO" />
    </b-form>
  </div>
</template>

<script>
import Botao from '@/components/Botao.vue';
import Pagamento from '@/components/Pagamento.vue';
import Especialiades from './Especialiades.vue';
import Parcelamento from './Parcelamento.vue';
import Progess from './Progess.vue';

export default {
  components: {
    Botao,
    Pagamento,
    Progess,
    form: {
      especialidade: null,
      checked: []
    },
    especialidades: [{ text: "Selecione", value: null }, "Carrots", "Beans", "Tomatoes", "Corn"],
    show: true,
    Especialiades,
    Parcelamento,
    Progess
  }
}
</script>