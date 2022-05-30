<template>
    <div>
        <router-link :to="rota">
            <b-button type="submit" variant="primary" class="btn btn-primary">
                {{ label }}
            </b-button>
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
<style scoped>
.btn.btn-primary,
.btn.btn-primary:hover {
    background-color: unset;
    border-color: unset;
    border: none;
    /* margin-top: -8em; */
}

button {
    color: #483698;
    text-decoration: unset;
    font-family: var(--fonte-padrao-conforta);
}
</style>