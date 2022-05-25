<template>
  <div>
    <BotaoSeta rota="/" label="<" />

    <h1 class="titulo">Sobre o profissional</h1>

    <h2 class="subtitulo">Dados do profissional</h2>

    <b-form inline class="formGrup">

      <Especialiades />

      <label class="sr-only" for="inline-form-input-username">Informe o preço da consulta*</label>
      <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0 grupoValor">
        <b-form-input id="inline-form-input-username" placeholder="Valor" class="campoValor"></b-form-input>
      </b-input-group>

      <Pagamento />

      <div>
        <Progess :etapa="2" />

        <span>2 de 2</span>
      </div>

      
    </b-form>
    <Botao rota="/finalizado" label="PRÓXIMO" />
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

<style scoped>
.titulo {
  font-family: var(--fonte-padrao-conforta);
  font-weight: bold;
  color: var(--cor-letra-titulo);
  padding-top: 0.5em;
}

.subtitulo {
  font-family: var(--fonte-padrao-open);
  font-size: 1.3em;
  font-weight: 600;
  padding: 1em 0;
}

.formGrup {
  font-family: var(--fonte-padrao-open);
  font-weight: 500;
  padding-bottom: 1em;
}
.grupoValor{
  padding: .5em 0;
}
.input-group-text{
  color: #ffff;
  background-color: var(--cor-letra-titulo);
  font-weight: bold;
  border: 2px solid;
  border-top-left-radius: 5px;
  border-end-start-radius: 5px;
  border-right: unset;
  width: 2.8em;
  height: 2.7em
}
.campoValor{
  width: 10em;
  border: 2px solid;
  border-radius: 5px;
  border-left: unset;
  border-color: var(--cor-letra-titulo);
  background-color: unset;
  color: var(--cor-select);
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){
  margin: 2px 0px 0px -4px;
  padding: 10px 10px 10px 10px;
  height: 39px;
}
</style>
