<template>
  <div>

    <h1 class="conteudo">Sobre o profissional</h1>

    <p>Dados do profissional</p>

    <label for="Nome">Nome completo*</label>
    <input type="text" name="nome" id="nome" placeholder="Digite o nome completo">

    <label for="CPF">CPF*</label>
    <input type="number" name="cpf" id="cpf" placeholder="Digite um CPF">

    <label for="Celular">Número de Celular*</label>
    <input type="tel" name="celular" id="celular" placeholder="(00) 0 0000-0000">

    <div class="selecaoEstado">

      <label for="Estado">Estado*</label>
      <select>
        <option value="estado-id">Pará</option>
      </select>

      <label for="Estado">Cidade*</label>
      <select>
        <option value="estado-id">Belém</option>
      </select>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
.conteudo {
  padding: 3em 1em 0 0.5em;
  color: #483698;
}
</style>
