<template>
  <div>
    <h1 class="titulo">Sobre o profissional</h1>

    <h2 class="subtitulo">Dados do profissional</h2>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formGrup">
      <b-form-group id="input-group-1" label="Nome completo*" label-for="input-1" class="formBloco">
        <b-form-input id="input-1" v-model="form.nome_completo" type="text" placeholder="Digite o nome completo"
          required class="inputIten">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="CPF*" label-for="input-2" class="formBloco">
        <b-form-input id="input-2" v-model="form.cpf" type="number" placeholder="Digite um CPF" required
          class="inputIten itenNumerico">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Número de celular*" label-for="input-3" class="formBloco">
        <b-form-input id="input-3" v-model="form.numero_celular" type="number" placeholder="(00) 0 0000-0000" required
          class="inputIten itenNumerico">
        </b-form-input>
      </b-form-group>

      <div class="containerLocalidade">
        <b-form-group id="input-group-4" label="Estado*" label-for="input-4" class="formBloco">
          <b-form-select id="input-4" v-model="form.estado" :options="estados" required class="selectIten">
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-5" label="Cidade*" label-for="input-5" class="formBloco">
          <b-form-select id="input-5" v-model="form.cidade" :options="cidades" required class="selectIten">
          </b-form-select>
        </b-form-group>

        <!-- <div class="alert alert-danger" role="alert">
                Erro message
              </div> -->
      </div>

      <div class="containerProgess">
        <Progess :etapa="1" class="progressBarra" />
        <span class="spanProgress">1 de 2</span>
      </div>

      <Botao rota="/atendimento" label="PRÓXIMO" />
    </b-form>
    <!--  <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import Botao from "./Botao.vue";
import Progess from "./Progess.vue";
export default {
  components: {
    Botao,
    Progess,
  },
  data() {
    return {
      form: {
        nome_completo: "",
        cpf: "",
        numero_celular: "",
        estado: null,
        cidade: null,
        checked: [],
      },
      estados: [
        { text: "Selecione", value: null },
        "Pará",
        "São Paulo",
        "Rio de Janeiro",
        "Paraná",
      ],

      cidades: [
        { text: "Selecione", value: null },
        "Belém",
        "São Paulo",
        "Rio de Janeiro",
        "Coritiba",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      /* alert(JSON.stringify(this.form)) */;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
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
  padding: 1em 0em;
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
  .itenNumerico{
    width: 20em;
  }
  .containerLocalidade{
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
