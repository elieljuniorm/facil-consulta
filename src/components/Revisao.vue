<template>
    <div>
        <h1 class="titulo">Revisão do cadastro</h1>

        <p class="textFixo">Nome completo</p>

        <p class="textVariavel">Eliel Miglio Maia</p>

        <p class="textFixo">CPF</p>

        <p class="textVariavel">020.467.322-43</p>

        <p class="textFixo">Número de celular ou telefone</p>

        <p class="textVariavel">(91) 9 8588-9200</p>

        <p class="textFixo">Estado/Cidade</p>

        <p class="textVariavel">Ananindeua/Pará</p>

        <p class="textFixo">Especialidade principal</p>

        <p class="textVariavel">Dev</p>

        <p class="textFixo">Preço da consulta</p>

        <p class="textVariavel">R$ 200,00</p>

        <p class="textFixo">Formas de pagamento da consulta</p>

        <p class="textVariavel">Cartão de crédito - Parcelamento em 2x sem juros</p>

        <Botao rota="/finalizado" label="CADASTRAR PROFISSIONAL" />

        <Botao rota="/" label="EDITAR CADASTRO" />

    </div>
</template>

<script>
import Botao from "@/components/Botao.vue"
export default {
    components: { Botao }
}
</script>

<style scoped>
.titulo {
    font-family: var(--fonte-padrao-conforta);
    font-weight: bold;
    color: var(--cor-letra-titulo);
    padding: .5em 0 1em 0;
}

.textFixo {
    font-weight: bold;
}

.textFixo,
.textVariavel {
    font-family: var(--fonte-padrao-open);
    margin: 0;
    padding-bottom: 1em;
    font-size: 1.2em;
}
</style>