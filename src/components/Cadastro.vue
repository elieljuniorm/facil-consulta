<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nome completo*" label-for="input-1">
        <b-form-input id="input-1" v-model="form.nome_completo" type="text" placeholder="Digite o nome completo"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="CPF*" label-for="input-2">
        <b-form-input id="input-2" v-model="form.cpf" type="number" placeholder="Digite um CPF" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Número de celular*" label-for="input-3">
        <b-form-input id="input-3" v-model="form.numero_celular" type="number" placeholder="(00) 0 0000-0000" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Estado*" label-for="input-4">
        <b-form-select id="input-4" v-model="form.estado" :options="estados" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Cidade*" label-for="input-5">
        <b-form-select id="input-5" v-model="form.cidade" :options="cidades" required></b-form-select>
      </b-form-group>

      <Progess :etapa="1" />

      <Botao rota="/atendimento" label="PRÓXIMO" />

    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import Botao from './Botao.vue'
import Progess from './Progess.vue'
export default {
  components: {
    Botao,
    Progess
  },
  data() {
    return {
      form: {
        nome_completo: '',
        cpf: '',
        numero_celular: '',
        estado: null,
        cidade: null,
        checked: []
      },
      estados: [{ text: 'Selecione', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],

      cidades: [{ text: 'Selecione', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
</style>