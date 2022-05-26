<template>
    <div class="container">
        <b-button type="submit" variant="primary" class="btn btn-primary">
            <router-link :to="rota" class="label">{{ label }}</router-link>
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
    padding-bottom: 2em;
    text-align: center;
}

.btn.btn-primary,
.btn.btn-primary:hover {
    background-color: #483698;
    border-color: unset;
    border-radius: 40px;
    height: 3em;
    width: 22em;
}

.label {
    color: #ffff;
    text-decoration: unset;
    font-family: var(--fonte-padrao-conforta);
    font-weight: 400;
    font-size: 1.2em;
    text-align: center;
}

@media only screen and (min-width: 320px) and (max-width: 380px) {

    .btn.btn-primary,
    .btn.btn-primary:hover {
        height: 4.1em;
        width: 16em;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {

    .btn.btn-primary,
    .btn.btn-primary:hover {
        width: 30em;

    }
    .container {
    padding-bottom: 2em;
    text-align: left;
    margin-left: 0;
}
}
</style>