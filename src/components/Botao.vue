<template>
    <div>
        <b-button type="submit" variant="primary" class="btn btn-primary botaoSeta">
            <router-link :to="rota">{{label}}</router-link>
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
        label:{
            type: String
        }
    }
}
</script>
<style scoped>
.btn.btn-primary,
.btn.btn-primary:hover{
  background-color: #483698;
  border-color: unset;
  border-radius: 40px;
  
}
a{
    color: #ffff;
    text-decoration: unset;
}
</style>