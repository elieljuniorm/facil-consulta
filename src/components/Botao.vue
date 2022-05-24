<template>
    <div>
        <b-button type="submit" variant="primary">
            <router-link :to="rota">PRÓXIMO</router-link>
        </b-button>
    </div>
</template>
<script>
export default {
    name: 'Botao',
    props: {
        rota: {
            type: String
        }
    }
}
</script>
<style scoped>
</style>