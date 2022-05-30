<template>

    <div>
        <b-form-group label="Formas de pagamento da consulta*" v-slot="{ ariaDescribedby }">

            <b-form-checkbox v-for="option in options" v-model="form.tipo_pagamento" :key="option.value"
                :value="option.text" :aria-describedby="ariaDescribedby" name="flavour-3a" class="selectIten">
                <span class="spanText">{{ option.text }}</span>
            </b-form-checkbox>
            <Parcelamento :visivel="form.tipo_pagamento.indexOf('Cartão de crédito') !== -1" />
        </b-form-group>

    </div>

</template>

<script>
import Parcelamento from './Parcelamento.vue'
export default {
    data() {
        return {
            options: [
                { text: "Em dinheiro", value: "dinheiro" },
                { text: "Pix", value: "pix" },
                { text: "Cartão de crédito", value: "cartao" }
            ],
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
    components: { Parcelamento },
    mounted() {
        if (this.$session.get("form")) {
            this.form = this.$session.get("form");
        }
    },
    watch: {
        'form': {
            handler: function (_form) {
                this.$session.set("form", _form);
            },
            deep: true
        }
    }
}
</script>

<style scoped>
.selectIten {
    background: #F9F9F9;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0px var(--cor-sombra);
    margin: 1em 0;
    padding: 1em 3em;
}

.spanText {
    padding: 0 1em 0 3em;
    font-size: .9em;
    font-weight: 600;
    font-family: var(--fonte-padrao-open);
}
</style>