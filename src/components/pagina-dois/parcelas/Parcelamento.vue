<template>
    <div>
        <b-collapse id="parcelamento" v-model="visivel" class="selectIten">

            <b-form-group label="Parcelamento em" v-slot="{ ariaDescribedby }" class="pacelas">
                <b-form-radio v-model="form.parcelamento" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="1">
                    <p class="descricao">1x, sem juros</p>
                </b-form-radio>
                <b-form-radio v-model="form.parcelamento" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="2">
                    <p class="descricao">2x, sem juros</p>
                </b-form-radio>
                <b-form-radio v-model="form.parcelamento" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="3">
                    <p class="descricao">3x, sem juros</p>
                </b-form-radio>
            </b-form-group>
        </b-collapse>

    </div>
</template>

<script>
export default {
    props: {
        visivel: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: {
                name: null,
                cpf: null,
                numero_celular: null,
                estado: null,
                cidade: null,
                especialista: null,
                valor: null,
                tipo_pagamento: [],
                parcelamento: null
            }
        }
    },
    mounted() {
        if (this.$session.get("form")) {
            this.form = this.$session.get("form");
        }
    },
    watch: {
        'form': {
            handler: function (_form) {
                this.$session.set("form", _form);
            },
            deep: true
        }
    }
}
</script>

<style scoped>
.selectIten {
    background: var(--cor-sombra-select);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 1px 0px var(--cor-sombra);
    margin: -1.2em 0 1em 0;
    padding: 1em 6.5em;
}

.descricao {
    padding: 0 1.2em;
}
</style>