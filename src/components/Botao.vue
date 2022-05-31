<template>
    <div class="container">
        <button type="submit" class="btnComponente">
            {{ label }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Botao',
    props: {
        label: {
            type: String
        }
    },
}
</script>

<style>
.container {
    padding-bottom: 2em;
    text-align: center;
}

.btnComponente {
    background-color: unset;
    border-color: none;
    border: none;
    border-radius: 40px;
    height: 3em;
    width: inherit;
    color: var(--cor-letra-branca);
    text-decoration: unset;
    font-family: var(--fonte-padrao-conforta);
    font-weight: 400;
    font-size: 1.1em;
    text-align: center;

}

@media only screen and (min-width: 320px) and (max-width: 380px) {

    .btnComponente {
        height: 4.1em;
        width: inherit;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {

    .btnComponente {
        width: inherit;
    }

    .container {
        padding-bottom: 2em;
        text-align: left;
        margin-left: 0;
    }
}
</style>