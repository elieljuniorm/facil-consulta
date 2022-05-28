<template>
  <div>
    <h1 class="titulo">Sobre o profissional</h1>

    <h2 class="subtitulo">Dados do profissional</h2>

    <b-form inline class="formGrup">

      <Especialiades />

      <label class="sr-only" for="inline-form-input-username">Informe o preço da consulta*</label>
      <b-input-group prepend="R$" class="mb-2 mr-sm-2 mb-sm-0 grupoValor">
        <b-form-input id="inline-form-input-username" type="number" placeholder="Valor" required class="campoValor">
        </b-form-input>
      </b-input-group>
      <!-- between: between(30, 350) uso para valor validado -->

      <Pagamento />

      <div class="containerProgess">
        <Progess :etapa="2" class="progressBarra" />
        <span class="spanProgress">2 de 2</span>
      </div>


    </b-form>
    <Botao rota="/revisao" label="PRÓXIMO" />
  </div>
</template>

<script>
import Botao from "@/components/Botao.vue";
import Pagamento from "@/components/Pagamento.vue";
import Especialiades from "./Especialiades.vue";
import Progess from "./Progess.vue";

export default {
  components: {
    Botao,
    Pagamento,
    Progess,
    Especialiades,
    Progess
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

.grupoValor {
  padding: .5em 0;
  width: 18em;
}

.input-group-text {
  color: #ffff;
  background-color: var(--cor-letra-titulo);
  font-weight: bold;
  border: 2px solid;
  border-top-left-radius: 5px;
  border-end-start-radius: 5px;
  border-right: unset;
  width: 2.8em;
  height: 3.22em
}

.campoValor {
  border: 2px solid;
  border-radius: 5px;
  border-left: unset;
  border-color: var(--cor-letra-titulo);
  background-color: unset;
  color: var(--cor-select);
}

.input-group> :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin: 2px 0px 0px -4px;
  height: 3em;
}

.containerProgess {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  align-items: center;
  padding: 1em;
}

#app>div>div>form>div.containerProgess>div {
  margin: 0 !important;
}

.progressBarra {
  width: 20em;
}

.spanProgress {
  font-family: var(--fonte-padrao-open);
  font-weight: bold;
  font-size: 1.2em;
  color: var(--cor-letra-titulo);
  padding-left: 1em;
}

@media only screen and (min-width: 320px) and (max-width: 390px) {
  .selectIten {
    width: 8em;
  }

  .progressBarra {
    width: 15em;
  }
}

@media only screen and (min-width: 450px) and (max-width: 500px) {
  .selectIten {
    width: 12em;
  }

  .progressBarra {
    width: 25em;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .formGrup {
    width: 29em;
  }
  .input-group> :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  height: 2.98em;
}
  .containerProgess {
    padding: 1em 1em 1em 0;
  }
  .progressBarra {
    width: 30em;
  }
}
</style>