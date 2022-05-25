<template>
    <div class="container">
        <b-button type="submit" variant="primary" class="btn btn-primary">
            <router-link :to="rota">{{ label }}</router-link>
        </b-button>
    </div>
</template>
<script>
export default {
    name: 'Botao',
    props: {
        rota: {
            type: String
        },
        label: {
            type: String
        }
    }
}
</script>
<style scoped>
.container {
    display: grid;
    padding-bottom: 2em;
}

.btn.btn-primary,
.btn.btn-primary:hover {
    background-color: #483698;
    border-color: unset;
    border-radius: 40px;
}

a {
    color: #ffff;
    text-decoration: unset;
    font-family: var(--fonte-padrao-conforta);
    font-weight: 400;
    font-size: 1.2em;
}
</style>