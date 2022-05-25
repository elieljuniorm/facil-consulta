<template>
    <div>
        <b-button type="submit" variant="primary" class="btn btn-primary">
            <router-link :to="rota">{{label}}</router-link>
        </b-button>
    </div>
</template>
<script>
export default {
    name: 'BotaoSeta',
    props: {
        rota: {
            type: String
        },
        label:{
            type: String
        }
    }
}
</script>
<style scoped>
.btn.btn-primary,
.btn.btn-primary:hover{
  background-color: unset;
  border-color: unset;
  border: none;
  margin-top: -8em;
}
a{
    color: #483698;
    text-decoration: unset;
}
</style>