<template>
    <b-form @submit.prevent="submit" class="container">
        <h1 class="titulo">Revisão do cadastro</h1>

        <p class="textFixo">Nome completo</p>

        <p class="textVariavel">{{ form.name }}</p>

        <p class="textFixo">CPF</p>

        <p class="textVariavel">{{ form.cpf }}</p>

        <p class="textFixo">Número de celular ou telefone</p>

        <p class="textVariavel">{{ form.numero_celular }}</p>

        <p class="textFixo">Estado/Cidade</p>

        <p class="textVariavel">{{ form.estado }}/{{ form.cidade }}</p>

        <p class="textFixo">Especialidade principal</p>

        <p class="textVariavel">{{ form.especialista }}</p>

        <p class="textFixo">Preço da consulta</p>

        <p class="textVariavel">R$&nbsp;{{ form.valor }}</p>

        <p class="textFixo">Formas de pagamento da consulta</p>

        <p class="textVariavel">

        <ul id="formas_pagamentos">

            <li v-for="item in form.tipo_pagamento" :key="item">{{ item }}
                <span v-if="item == 'Cartão de crédito'">&nbsp;- Parcelamento em {{ form.parcelamento }}x sem
                    juros</span>
            </li>

        </ul>

        </p>


        <Botao label="CADASTRAR PROFISSIONAL" class="btnComponente" />

        <BotaoSeta rota="/" label="Editar cadastro" class="botaoVolta" />

    </b-form>
</template>

<script>
import Botao from "@/components/Botao.vue"
import BotaoSeta from "@/components/BotaoSeta.vue"
export default {
    components: { Botao, BotaoSeta },
    data() {
        return {
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
    methods: {
        submit() {
            this.$router.push('/finalizado');
        }
    },
    mounted() {
        if (this.$session.get("form")) {
            this.form = this.$session.get("form");
        }
    },
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
    text-align: left;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none
}

.btnComponente {
    background-color: var(--cor-botao-cadastro) !important;
    color: black !important;
    border-radius: 40px;
    height: 3em;
    width: 20em;
    margin: 2em auto 0 auto;
    padding: 0 0.8em 0 0;
}

.botaoVolta {
    text-align: center;
    margin: 2em 0 1em 0;
}
</style>