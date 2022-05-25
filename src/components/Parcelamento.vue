<template>
    <div>
        <b-collapse id="parcelamento" v-model="visivel" class="selectIten">

            <b-form-group label="Parcelamento em" v-slot="{ ariaDescribedby }" class="pacelas">
                <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="1">
                    1x, sem juros
                </b-form-radio>
                <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="2">
                    2x, sem juros
                </b-form-radio>
                <b-form-radio v-model="parcelamento" :aria-describedby="ariaDescribedby" name="some-radios" value="3">
                    3x, sem juros
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
            parcelamento: ''
        }
    }
}
</script>

<style scoped>
.selectIten {
    background: #F9F9F9;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 1px 0px var(--cor-sombra);
    margin: -1.2em 0 1em 0;
    padding: 1em 3em;
}
</style>