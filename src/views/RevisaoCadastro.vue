<template>
    <div class="revisaoCadastro">
        <BotaoSeta rota="/atendimento" label="<" />
        <Revisao/>
    </div>
</template>

<script>
import BotaoSeta from "@/components/BotaoSeta.vue";
import Revisao from "@/components/Revisao.vue";
export default {
    components: { BotaoSeta, Revisao },
};
</script>

<style scoped>
.revisaoCadastro {
    background: white;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    width: 100%;
    height: auto;
    margin: 4em 0 0 0;
    color: rgb(1, 24, 24);
    box-shadow: 5px 5px 10px rgb(0 0 0 / 57%);
    padding: 0.7em 1em 0 1em
}
</style>

