<template>
    <div>
        <b-form-group label="Formas de Pagamento*" v-slot="{ ariaDescribedby }">
            <b-form-checkbox v-for="option in options" v-model="selected" :key="option.value" :value="option.value"
                :aria-describedby="ariaDescribedby" name="flavour-3a">
                {{ option.text }}
            </b-form-checkbox>
        </b-form-group>
        <Parcelamento :visivel="selected == 'cartao'"/>
    </div>
</template>

<script>
import Parcelamento from './Parcelamento.vue'
export default {
    data() {
        return {
            selected: [],
            options: [
                { text: "Dinheiro", value: "dinheiro" },
                { text: "PIX", value: "pix" },
                { text: "Cartão", value: "cartao" }
            ]
        };
    },
    components: { Parcelamento }
}
</script>