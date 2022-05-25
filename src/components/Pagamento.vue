<template>
    <div>
        <b-form-group label="Formas de pagamento da consulta*" v-slot="{ ariaDescribedby }">
            <b-form-checkbox v-for="option in options" v-model="selected" :key="option.value" :value="option.value" :aria-describedby="ariaDescribedby" name="flavour-3a" class="selectIten">
                <span class="spanText">{{ option.text }}</span>
            </b-form-checkbox>
        </b-form-group>
        <Parcelamento :visivel="selected == 'cartao'" />
    </div>
</template>

<script>
import Parcelamento from './Parcelamento.vue'
export default {
    data() {
        return {
            selected: [],
            options: [
                { text: "Em dinheiro", value: "dinheiro" },
                { text: "Pix", value: "pix" },
                { text: "Cartão de crédito", value: "cartao" }
            ]
        };
    },
    components: { Parcelamento }
}
</script>

<style scoped>
.selectIten {
    background: #F9F9F9;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0px var(--cor-sombra);
    margin: 1em 0;
    padding: 1em 3em;
    font-size: .9em;
    font-weight: 600;
    font-family: var(--fonte-padrao-open);
}
.spanText{
    padding: 0 1em 0 3em;
}
</style>