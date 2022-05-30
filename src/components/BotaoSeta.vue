<template>
    <div>
        <router-link :to="rota">
            <button type="submit" class="btnSeta">
                {{ label }}
            </button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'BotaoSeta',
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
<style>
.btnSeta{
    background-color: unset;
    border-color: unset;
    border: none;
    /* margin-top: -8em; */
}

button {
    color: #483698;
    text-decoration: unset;
    color: var(--cor-letra-titulo);
    font-family: var(--fonte-padrao-conforta);
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
}
</style>