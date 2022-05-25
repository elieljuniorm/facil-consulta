<template>
  <div>
    <BotaoSeta rota="/" label="<" />

    <h1>Sobre o profissional</h1>

    <h2>Dados do profissional</h2>

    <b-form inline>
      <Especialiades />

      <label class="sr-only" for="inline-form-input-username"
        >Informe o preço da consulta</label
      >
      <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
          id="inline-form-input-username"
          placeholder="Valor"
        ></b-form-input>
      </b-input-group>

      <Pagamento />

      <div>
        <Progess :etapa="2" />

        <span>2 de 2</span>
      </div>

      <Botao rota="/finalizado" label="PRÓXIMO" />
    </b-form>
  </div>
</template>

<script>
import Botao from "@/components/Botao.vue";
import Pagamento from "@/components/Pagamento.vue";
import Especialiades from "./Especialiades.vue";
import Progess from "./Progess.vue";
import BotaoSeta from "./BotaoSeta.vue";

export default {
  components: {
    Botao,
    Pagamento,
    Progess,
    Especialiades,
    Progess,
    BotaoSeta,
    form: {
      especialidade: null,
      checked: [],
    },
    especialidades: [
      { text: "Selecione", value: null },
      "Carrots",
      "Beans",
      "Tomatoes",
      "Corn",
    ],
    show: true,
  },
};
</script>

<style scoped></style>
