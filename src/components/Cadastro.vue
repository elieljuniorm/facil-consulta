<template>
  <div>
    <h1 class="titulo">Sobre o profissional</h1>

    <h2 class="subtitulo">Dados do profissional</h2>

    <b-form @submit.prevent="submit" class="formGrup">

      <b-form-group id="example-input-group-1" label="Nome completo*" label-for="example-input-1" class="formBloco">

        <b-form-input id="example-input-1" name="example-input-1" v-model="$v.form.name.$model"
          :state="validateState('name')" aria-describedby="input-1-live-feedback" class="inputIten"
          placeholder="Digite o nome completo"></b-form-input>


        <b-form-invalid-feedback id="input-1-live-feedback">Este é um campo obrigatório e deve ter pelo menos 3
          caracteres.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="CPF*" label-for="example-input-2" class="formBloco">
        <b-form-input id="example-input-2" name="example-input-2" v-model="$v.form.cpf.$model"
          :state="validateState('cpf')" aria-describedby="input-2-live-feedback" class="inputIten itenNumerico"
          placeholder="Digite um CPF" v-mask="'###.###.###-##'"></b-form-input>


        <b-form-invalid-feedback id="input-2-live-feedback">Este é um campo obrigatório e deve ter 11 caracteres.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-3" label="Número de celular*" label-for="example-input-3" class="formBloco">
        <b-form-input id="example-input-3" name="example-input-3" v-model="$v.form.numero_celular.$model"
          :state="validateState('numero_celular')" aria-describedby="input-3-live-feedback"
          class="inputIten itenNumerico" placeholder="(00) 0 0000-0000" v-mask="'(##) # ####-####'">
        </b-form-input>


        <b-form-invalid-feedback id="input-3-live-feedback">Este é um campo obrigatório e deve ter 11 caracteres.
        </b-form-invalid-feedback>
      </b-form-group>

      <div class="containerLocalidade">

        <b-form-group id="example-input-group-4" label-for="example-input-4" class="formBloco">
          <label>Estado*</label>
          <b-form-select id="example-input-4" name="example-input-4" v-model="$v.form.estado.$model" :options="estados"
            text-field="nome" value-field="nome" :state="validateState('estado')" @change="getCidades()"
            aria-describedby="input-4-live-feedback" class="selectIten">

            <template #first>

              <b-form-select-option :value="null" disabled>Selecione</b-form-select-option>

            </template>

          </b-form-select>

          <b-form-invalid-feedback id="input-4-live-feedback">Este é um campo obrigatório e deve ter uma cidade
            selecionada.</b-form-invalid-feedback>

        </b-form-group>

        <b-form-group id="example-input-group-5" label-for="example-input-5" class="formBloco">
          <label>Cidade*</label>
          <b-form-select id="example-input-5" name="example-input-5" v-model="$v.form.cidade.$model" :options="cidades"
            text-field="nome" value-field="nome" :state="validateState('cidade')"
            aria-describedby="input-5-live-feedback" class="selectIten">

            <template #first>

              <b-form-select-option :value="null" disabled>Selecione</b-form-select-option>

            </template>

          </b-form-select>

          <b-form-invalid-feedback id="input-2-live-feedback">Este é um campo obrigatório e deve ter um estado
            selecionado.</b-form-invalid-feedback>

        </b-form-group>

      </div>

      <div class="containerProgess">
        <Progess :etapa="1" class="progressBarra" />
        <span class="spanProgress">1 de 2</span>
      </div>

      <Botao label="PRÓXIMO" class="btnComponente" />

    </b-form>

  </div>

</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import Botao from "./Botao.vue";
import Progess from "./Progess.vue";
import api from '@/components/api'

export default {
  mixins: [validationMixin],
  components: {
    Botao,
    Progess,
  },
  data() {
    return {
      estados: [],
      cidades: [],
      form: {
        name: null,
        cpf: null,
        numero_celular: null,
        estado: null,
        cidade: null,
        especialista: null,
        valor: null,
        tipo_pagamento: [],
        parcelamento: null
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
        minLength: minLength(14),
        maxLength: maxLength(14)
      },
      numero_celular: {
        required,
        minLength: minLength(16),
        maxLength: maxLength(16)
      },
      estado: {
        required
      },
      cidade: {
        required
      }

    }
  },
  created() {
    this.getEstados();
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
    submit() {
      this.verificaCPF();
    },
    verificaCPF(){
      api
        .get("/profissionais?cpf="+this.form.cpf.replace(/[^0-9]/g,''))

        .then(resp => {
          
          this.$v.form.$touch();
          if (this.$v.form.$anyError || resp.data.length != 0) {
            return;
          } else {
            this.$router.push('/atendimento');
          }
          
        })

        .catch((error) => {
          console.log(error);
          return false;
        })
    },
    getEstados() {
      api
        .get("/estados")

        .then(resp => {
          this.estados = resp.data;
        })

        .catch((error) => {
          console.log(error);
        })
    },
    getCidades() {
      if (this.form.estado) {
        api
          .get("/estados?nome=" + this.form.estado + "&_embed=cidades")

          .then(resp => {
            this.cidades = resp.data[0].cidades;
          })

          .catch((error) => {
            console.log(error);
          })
      }
    }
  }, mounted() {
    if (this.$session.get("form")) {
      this.form = this.$session.get("form");
      this.estados = this.$session.get("estados");
      this.cidades = this.$session.get("cidades");
    }
  },
  watch: {
    'form': {
      handler: function (_form) {
        this.$session.set("form", _form);
      },
      deep: true
    },
    'estados': {
      handler: function (_estados) {
        this.$session.set("estados", _estados);
      }
    },
    'cidades': {
      handler: function (_cidades) {
        this.$session.set("cidades", _cidades);
      }
    },
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
label{
  margin-bottom: 1em;
  display: block;
}
.inputIten {
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--cor-letra-titulo);
  padding: 12px;
  background-color: unset;
  color: var(--cor-select);
  margin-top: 1em;
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
.btnComponente{
  background-color: #483698;
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
    width: 30em;
  }

  .itenNumerico {
    width: 20em;
  }
  .inputIten{
    margin: 0.5em 0 0 0;
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
