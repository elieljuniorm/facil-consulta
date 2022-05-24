<template>
    <div>
        <b-form-group label="Formas de Pagamento*" v-slot="{ ariaDescribedby }">
            <b-form-checkbox v-for="option in options" v-model="selected" :key="option.value" :value="option.value"
                :aria-describedby="ariaDescribedby" name="flavour-3a">
                {{ option.text }}
            </b-form-checkbox>
        </b-form-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [], // Must be an array reference!
            options: [
                { text: 'Dinheiro', value: 'dinheiro' },
                { text: 'PIX', value: 'pix' },
                { text: 'Cartão', value: 'cartao' }
            ]
        }
    }
}
</script>