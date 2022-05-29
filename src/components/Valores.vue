<template>
  <div>
    <h1 class="titulo">Sobre o profissional</h1>

    <h2 class="subtitulo">Dados do profissional</h2>

    <b-form @submit.stop.prevent="onSubmit" class="formGrup">

      <b-form-group id="example-input-group-1" label="Especialidade*" label-for="example-input-1" class="especilidade">

        <b-form-select id="example-input-1" name="example-input-1" v-model="$v.form.especialista.$model"
          :options="especialista" :state="validateState('especialista')" aria-describedby="input-1-live-feedback"
          class="selectOpt">
        </b-form-select>

        <b-form-invalid-feedback id="input-1-live-feedback">Este é um campo obrigatório e deve ter uma especialidade
          selecionada.</b-form-invalid-feedback>

      </b-form-group>

      <b-form-group id="example-input-group-1" label="Valor da consulta*" label-for="example-input-1">

        <b-input-group prepend="R$">

          <b-form-input min='0' type="number" id="example-input-1" name="example-input-1" v-model="$v.form.valor.$model"
            :state="validateState('valor')" aria-describedby="input-1-live-feedback" class="itenNumerico"
            placeholder="Valor"></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">Este é um campo obrigatório e deve ter um valor mínimo de
            R$ 30,00 e máximo de R$ 350,00.
          </b-form-invalid-feedback>
        </b-input-group>

      </b-form-group>

      <Pagamento />

      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
      <Botao rota="/revisao" label="PRÓXIMO" />

    </b-form>

    <div class="containerProgess">
      <Progess :etapa="2" class="progressBarra" />
      <span class="spanProgress">2 de 2</span>
    </div>

    

  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, between, maxLength } from "vuelidate/lib/validators";
import Botao from "./Botao.vue";
import Progess from "./Progess.vue";
import Pagamento from "./Pagamento.vue";

export default {
  mixins: [validationMixin],
  components: {
    Botao,
    Progess,
    Pagamento,
  },
  data() {
    return {
      especialista: [
        { value: null, text: "Selecione a especialidade" },
        { value: "cardiologista", text: "Cardiologista" },
        { value: "fisioterapeuta", text: "Fisioterapeuta" }
      ],
      form: {
        especialista: null,
        valor: null,
      }
    };
  },
  validations: {
    form: {
      especialista: {
        required
      },
      valor: {
        required,
        between: between(30, 350),
        maxLength: maxLength(7)
      }
    }
  },
  methods: {

    validateState(valor) {
      const { $dirty, $error } = this.$v.form[valor];
      return $dirty ? !$error : null;
    },
    validateState(especialista) {
      const { $dirty, $error } = this.$v.form[especialista];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
    }
  }
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

.especilidade {
  padding: .5em 0 1em 0;
  font-family: var(--fonte-padrao-open);
}

.selectOpt {
  width: 100%;
  height: 3em;
  border-radius: 5px;
  border: 2px solid var(--cor-letra-titulo);
  background-color: unset;
  color: var(--cor-select);
  padding-left: 1em;
}

.valor {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  margin: 1em 0;
}

.input-group-text {
  background-color: var(--cor-letra-titulo);
  color: #ffff;
  padding: 0.5em;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  border: 2px solid var(--cor-letra-titulo);
}

.itenNumerico {
  width: 10em;
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  border: 2px solid var(--cor-letra-titulo);
  background-color: unset;
  margin: 0 40% 0 -4px;
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