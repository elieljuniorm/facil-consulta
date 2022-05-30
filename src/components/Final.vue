<template>
    <div class="Final">
        <div class="container">
            <img src="https://cdn-icons-png.flaticon.com/512/4861/4861675.png" alt="médica" class="imgMedica">
        </div>
        <h1 class="titulo">Obrigado por se cadastrar</h1>
        <h2 class="subtitulo">Em breve você receberá seus agendamentos de consulta no telefone cadastrado &#128516</h2>

        <div class="container">
            <button class="botao">
                <a href="https://facilconsulta.com.br/" target="_blank" rel="noopener noreferrer" class="link">OK</a>
            </button>
        </div>
    </div>
</template>

<script>
import Botao from "@/components/Botao.vue"
export default {
    components: { Botao }
}
</script>

<style scoped>
.container {
    padding-top: 1em;
}

.imgMedica {
    height: 20em;
}

.botao {
    background-color: #483698;
    border-color: unset;
    border-radius: 40px;
    border: unset;
    height: 3em;
    width: 15em;
}
.link{
    text-decoration: unset;
    color: #FFFF
}
.titulo {
    font-family: var(--fonte-padrao-conforta);
    font-weight: bold;
    color: var(--cor-letra-titulo);
    padding-top: 0.5em;
    text-align: center;
}

.subtitulo {
    font-family: var(--fonte-padrao-open);
    font-size: 1.3em;
    font-weight: 600;
    padding: 1em 0;
    text-align: center;

}

@media only screen and (min-width: 320px) and (max-width: 390px) {
    .imgMedica {
        height: 17em;
    }

    .subtitulo {
        text-align: center;
    }
}

@media only screen and (min-width: 450px) and (max-width: 500px) {
    .imgMedica {
        height: 22em;
    }

    .subtitulo {
        text-align: center;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .container {
        width: 57%;
        text-align: center;
    }

    .subtitulo {
        text-align: center;
    }
    .botao{
        text-align: center;
    }
}
</style>