<template>
    <div class="conteinerEspecialidade">
        <div class="mt-3">Especialidade principal*</div>
        <b-form-select v-model="selected" :options="options" required class="selectIten"></b-form-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: 'Selecione a especialidade' },
                { value: 'a', text: 'Cardiologista' },
                { value: 'b', text: 'Clínico' },
                { value: { C: '3PO' }, text: 'Pneumologista' },
                { value: 'd', text: 'Cirurgia geral'/* , disabled: true */ }
            ]
        }
    }
}
</script>

<style scoped>
.conteinerEspecialidade{
    padding-bottom: 1em;
    font-family: var(--fonte-padrao-open);
}
.mt-3{
    padding-bottom: .5em;
    margin: 0 !important;
}
.selectIten{
  width: 100%;
  height: 3em;
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--cor-letra-titulo);
  background-color: unset;
  color: var(--cor-select);
  padding-left: 1em;
}
</style>