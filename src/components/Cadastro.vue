<template>
  <div>
    <h1 class="titulo">Sobre o profissional</h1>

    <h2 class="subtitulo">Dados do profissional</h2>

    <b-form @submit.stop.prevent="onSubmit" class="formGrup">

      <b-form-group id="example-input-group-1" label="Nome completo*" label-for="example-input-1" class="formBloco">
        <b-form-input id="example-input-1" name="example-input-1" v-model="$v.form.name.$model"
          :state="validateState('name')" aria-describedby="input-1-live-feedback" class="inputIten"></b-form-input>


        <b-form-invalid-feedback id="input-1-live-feedback">Este é um campo obrigatório e deve ter pelo menos 3
          caracteres.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="CPF*" label-for="example-input-2" class="formBloco">
        <b-form-input id="example-input-2" name="example-input-2" v-model="$v.form.cpf.$model"
          :state="validateState('cpf')" aria-describedby="input-2-live-feedback" class="inputIten itenNumerico"></b-form-input>


        <b-form-invalid-feedback id="input-2-live-feedback">Este é um campo obrigatório e deve ter 11 caracteres.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-3" label="Número de celular*" label-for="example-input-3" class="formBloco">
        <b-form-input id="example-input-3" name="example-input-3" v-model="$v.form.numero_celular.$model"
          :state="validateState('numero_celular')" aria-describedby="input-3-live-feedback" class="inputIten itenNumerico">
        </b-form-input>


        <b-form-invalid-feedback id="input-3-live-feedback">Este é um campo obrigatório e deve ter 11 caracteres.
        </b-form-invalid-feedback>
      </b-form-group>

      <div class="containerLocalidade">

        <b-form-group id="example-input-group-4" label="Estado" label-for="example-input-4" class="formBloco">

          <b-form-select id="example-input-4" name="example-input-4" v-model="$v.form.estado.$model" :options="estados"
            :state="validateState('estado')" aria-describedby="input-4-live-feedback" class="selectIten">
          </b-form-select>

          <b-form-invalid-feedback id="input-4-live-feedback">Este é um campo obrigatório e deve ter uma cidade
            selecionada.</b-form-invalid-feedback>

        </b-form-group>

        <b-form-group id="example-input-group-5" label="Cidade" label-for="example-input-5" class="formBloco">

          <b-form-select id="example-input-5" name="example-input-5" v-model="$v.form.cidade.$model" :options="cidades"
            :state="validateState('cidade')" aria-describedby="input-5-live-feedback" class="selectIten">
          </b-form-select>

          <b-form-invalid-feedback id="input-2-live-feedback">Este é um campo obrigatório e deve ter um estado
            selecionado.</b-form-invalid-feedback>

        </b-form-group>

      </div>

      <div class="containerProgess">
        <Progess :etapa="1" class="progressBarra" />
        <span class="spanProgress">1 de 2</span>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>

      <Botao rota="/atendimento" label="PRÓXIMO" />

    </b-form>

  </div>

</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import Botao from "./Botao.vue";
import Progess from "./Progess.vue";

export default {
  mixins: [validationMixin],
  components: {
    Botao,
    Progess,
  },
  data() {
    return {
      estados: [
        { value: null, text: "Selecione" },
        { value: "para", text: "Pará" },
        { value: "maranhao", text: "Maranhão" }
      ],
      cidades: [
        { value: null, text: "Selecione" },
        { value: "belem", text: "Belém" },
        { value: "sao luis", text: "São Luis" }
      ],
      form: {
        name: null,
        cpf: null,
        numero_celular: null,
        estado: null,
        cidade: null,
      }
    };
  },
  validations: {
    form: {
      estado: {
        required
      },
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(48)
      },
      cpf: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11)
      },
      numero_celular: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11)
      },
      estado: {
        required
      },
      cidade: {
        required
      }

    }
  },
  methods: {

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    validateState(cpf) {
      const { $dirty, $error } = this.$v.form[cpf];
      return $dirty ? !$error : null;
    },
    validateState(numero_celular) {
      const { $dirty, $error } = this.$v.form[numero_celular];
      return $dirty ? !$error : null;
    },
    validateState(estado) {
      const { $dirty, $error } = this.$v.form[estado];
      return $dirty ? !$error : null;
    },
    validateState(cidade) {
      const { $dirty, $error } = this.$v.form[cidade];
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
}

.formBloco {
  padding: 1em 0;
}

.containerLocalidade {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  justify-content: center;
  margin: auto;
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

.inputIten {
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--cor-letra-titulo);
  padding: 12px;
  background-color: unset;
  color: var(--cor-select);
}

.selectIten {
  width: 11em;
  height: 2.5em;
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--cor-letra-titulo);
  background-color: unset;
  color: var(--cor-select);
  padding-left: .6em;
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
    width: 30em;
  }

  .itenNumerico {
    width: 20em;
  }

  .containerLocalidade {
    justify-items: normal;
  }

  .containerProgess {
    padding: 1em 1em 1em 0;
  }

  .progressBarra {
    width: 30em;
  }
}
</style>
